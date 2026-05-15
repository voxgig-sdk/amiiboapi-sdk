package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/amiiboapi-sdk"
	"github.com/voxgig-sdk/amiiboapi-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestAmiiboEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Amiibo(nil)
		if ent == nil {
			t.Fatal("expected non-nil AmiiboEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := amiiboBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "amiibo." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set AMIIBOAPI_TEST_AMIIBO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		amiiboRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.amiibo", setup.data)))
		var amiiboRef01Data map[string]any
		if len(amiiboRef01DataRaw) > 0 {
			amiiboRef01Data = core.ToMapAny(amiiboRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = amiiboRef01Data

		// LIST
		amiiboRef01Ent := client.Amiibo(nil)
		amiiboRef01Match := map[string]any{}

		amiiboRef01ListResult, err := amiiboRef01Ent.List(amiiboRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, amiiboRef01ListOk := amiiboRef01ListResult.([]any)
		if !amiiboRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", amiiboRef01ListResult)
		}

	})
}

func amiiboBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "amiibo", "AmiiboTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read amiibo test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse amiibo test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"amiibo01", "amiibo02", "amiibo03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("AMIIBOAPI_TEST_AMIIBO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AMIIBOAPI_TEST_AMIIBO_ENTID": idmap,
		"AMIIBOAPI_TEST_LIVE":      "FALSE",
		"AMIIBOAPI_TEST_EXPLAIN":   "FALSE",
		"AMIIBOAPI_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["AMIIBOAPI_TEST_AMIIBO_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["AMIIBOAPI_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["AMIIBOAPI_APIKEY"],
			},
			extra,
		})
		client = sdk.NewAmiiboapiSDK(core.ToMapAny(mergedOpts))
	}

	live := env["AMIIBOAPI_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["AMIIBOAPI_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

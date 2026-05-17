package voxgigamiiboapisdk

import (
	"github.com/voxgig-sdk/amiiboapi-sdk/go/core"
	"github.com/voxgig-sdk/amiiboapi-sdk/go/entity"
	"github.com/voxgig-sdk/amiiboapi-sdk/go/feature"
	_ "github.com/voxgig-sdk/amiiboapi-sdk/go/utility"
)

// Type aliases preserve external API.
type AmiiboapiSDK = core.AmiiboapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AmiiboapiEntity = core.AmiiboapiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AmiiboapiError = core.AmiiboapiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAmiiboEntityFunc = func(client *core.AmiiboapiSDK, entopts map[string]any) core.AmiiboapiEntity {
		return entity.NewAmiiboEntity(client, entopts)
	}
	core.NewAmiiboseriesEntityFunc = func(client *core.AmiiboapiSDK, entopts map[string]any) core.AmiiboapiEntity {
		return entity.NewAmiiboseriesEntity(client, entopts)
	}
	core.NewCharacterEntityFunc = func(client *core.AmiiboapiSDK, entopts map[string]any) core.AmiiboapiEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewGameseriesEntityFunc = func(client *core.AmiiboapiSDK, entopts map[string]any) core.AmiiboapiEntity {
		return entity.NewGameseriesEntity(client, entopts)
	}
	core.NewTypeEntityFunc = func(client *core.AmiiboapiSDK, entopts map[string]any) core.AmiiboapiEntity {
		return entity.NewTypeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAmiiboapiSDK = core.NewAmiiboapiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

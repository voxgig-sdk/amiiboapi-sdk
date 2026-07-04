// Typed models for the Amiiboapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Amiibo is the typed data model for the amiibo entity.
type Amiibo struct {
	AmiiboSeries *string `json:"amiibo_series,omitempty"`
	Character *string `json:"character,omitempty"`
	GameSeries *string `json:"game_series,omitempty"`
	Head *string `json:"head,omitempty"`
	Image *string `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	Tail *string `json:"tail,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AmiiboListMatch mirrors the amiibo fields as an all-optional match
// filter (Go analog of Partial<Amiibo>).
type AmiiboListMatch struct {
	AmiiboSeries *string `json:"amiibo_series,omitempty"`
	Character *string `json:"character,omitempty"`
	GameSeries *string `json:"game_series,omitempty"`
	Head *string `json:"head,omitempty"`
	Image *string `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	Tail *string `json:"tail,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Amiiboseries is the typed data model for the amiiboseries entity.
type Amiiboseries struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// AmiiboseriesListMatch mirrors the amiiboseries fields as an all-optional match
// filter (Go analog of Partial<Amiiboseries>).
type AmiiboseriesListMatch struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// Character is the typed data model for the character entity.
type Character struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CharacterListMatch mirrors the character fields as an all-optional match
// filter (Go analog of Partial<Character>).
type CharacterListMatch struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// Gameseries is the typed data model for the gameseries entity.
type Gameseries struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// GameseriesListMatch mirrors the gameseries fields as an all-optional match
// filter (Go analog of Partial<Gameseries>).
type GameseriesListMatch struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// Type is the typed data model for the type entity.
type Type struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// TypeListMatch mirrors the type fields as an all-optional match
// filter (Go analog of Partial<Type>).
type TypeListMatch struct {
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

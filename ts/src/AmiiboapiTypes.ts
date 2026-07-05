// Typed models for the Amiiboapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Amiibo {
  amiibo_series?: string
  character?: string
  game_series?: string
  head?: string
  image?: string
  name?: string
  release?: Record<string, any>
  tail?: string
  type?: string
}

export interface AmiiboListMatch {
  amiibo_series?: string
  character?: string
  game_series?: string
  head?: string
  image?: string
  name?: string
  release?: Record<string, any>
  tail?: string
  type?: string
}

export interface Amiiboseries {
  key?: string
  name?: string
}

export interface AmiiboseriesListMatch {
  key?: string
  name?: string
}

export interface Character {
  key?: string
  name?: string
}

export interface CharacterListMatch {
  key?: string
  name?: string
}

export interface Gameseries {
  key?: string
  name?: string
}

export interface GameseriesListMatch {
  key?: string
  name?: string
}

export interface Type {
  key?: string
  name?: string
}

export interface TypeListMatch {
  key?: string
  name?: string
}


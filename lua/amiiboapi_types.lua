-- Typed models for the Amiiboapi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Amiibo
---@field amiibo_series? string
---@field character? string
---@field game_series? string
---@field head? string
---@field image? string
---@field name? string
---@field release? table
---@field tail? string
---@field type? string

---@class AmiiboListMatch

---@class Amiiboseries
---@field key? string
---@field name? string

---@class AmiiboseriesListMatch

---@class Character
---@field key? string
---@field name? string

---@class CharacterListMatch

---@class Gameseries
---@field key? string
---@field name? string

---@class GameseriesListMatch

---@class Type
---@field key? string
---@field name? string

---@class TypeListMatch

local M = {}

return M

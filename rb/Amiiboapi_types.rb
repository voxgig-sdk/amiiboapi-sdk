# frozen_string_literal: true

# Typed models for the Amiiboapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Amiibo entity data model.
#
# @!attribute [rw] amiibo_series
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [String, nil]
#
# @!attribute [rw] game_series
#   @return [String, nil]
#
# @!attribute [rw] head
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] tail
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Amiibo = Struct.new(
  :amiibo_series,
  :character,
  :game_series,
  :head,
  :image,
  :name,
  :release,
  :tail,
  :type,
  keyword_init: true
)

# Match filter for Amiibo#list (any subset of Amiibo fields).
#
# @!attribute [rw] amiibo_series
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [String, nil]
#
# @!attribute [rw] game_series
#   @return [String, nil]
#
# @!attribute [rw] head
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] tail
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
AmiiboListMatch = Struct.new(
  :amiibo_series,
  :character,
  :game_series,
  :head,
  :image,
  :name,
  :release,
  :tail,
  :type,
  keyword_init: true
)

# Amiiboseries entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Amiiboseries = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Match filter for Amiiboseries#list (any subset of Amiiboseries fields).
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
AmiiboseriesListMatch = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Character entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Character = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Match filter for Character#list (any subset of Character fields).
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Gameseries entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Gameseries = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Match filter for Gameseries#list (any subset of Gameseries fields).
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
GameseriesListMatch = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Type entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Type = Struct.new(
  :key,
  :name,
  keyword_init: true
)

# Match filter for Type#list (any subset of Type fields).
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
TypeListMatch = Struct.new(
  :key,
  :name,
  keyword_init: true
)


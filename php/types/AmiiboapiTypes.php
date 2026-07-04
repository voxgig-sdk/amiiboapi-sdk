<?php
declare(strict_types=1);

// Typed models for the Amiiboapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Amiibo entity data model. */
class Amiibo
{
    public ?string $amiibo_series = null;
    public ?string $character = null;
    public ?string $game_series = null;
    public ?string $head = null;
    public ?string $image = null;
    public ?string $name = null;
    public ?array $release = null;
    public ?string $tail = null;
    public ?string $type = null;
}

/** Match filter for Amiibo#list (any subset of Amiibo fields). */
class AmiiboListMatch
{
    public ?string $amiibo_series = null;
    public ?string $character = null;
    public ?string $game_series = null;
    public ?string $head = null;
    public ?string $image = null;
    public ?string $name = null;
    public ?array $release = null;
    public ?string $tail = null;
    public ?string $type = null;
}

/** Amiiboseries entity data model. */
class Amiiboseries
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Match filter for Amiiboseries#list (any subset of Amiiboseries fields). */
class AmiiboseriesListMatch
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Character entity data model. */
class Character
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Match filter for Character#list (any subset of Character fields). */
class CharacterListMatch
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Gameseries entity data model. */
class Gameseries
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Match filter for Gameseries#list (any subset of Gameseries fields). */
class GameseriesListMatch
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Type entity data model. */
class Type
{
    public ?string $key = null;
    public ?string $name = null;
}

/** Match filter for Type#list (any subset of Type fields). */
class TypeListMatch
{
    public ?string $key = null;
    public ?string $name = null;
}


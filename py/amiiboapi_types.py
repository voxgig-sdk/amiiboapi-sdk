# Typed models for the Amiiboapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Amiibo(TypedDict, total=False):
    amiibo_series: str
    character: str
    game_series: str
    head: str
    image: str
    name: str
    release: dict
    tail: str
    type: str


class AmiiboListMatch(TypedDict, total=False):
    amiibo_series: str
    character: str
    game_series: str
    head: str
    image: str
    name: str
    release: dict
    tail: str
    type: str


class Amiiboseries(TypedDict, total=False):
    key: str
    name: str


class AmiiboseriesListMatch(TypedDict, total=False):
    key: str
    name: str


class Character(TypedDict, total=False):
    key: str
    name: str


class CharacterListMatch(TypedDict, total=False):
    key: str
    name: str


class Gameseries(TypedDict, total=False):
    key: str
    name: str


class GameseriesListMatch(TypedDict, total=False):
    key: str
    name: str


class Type(TypedDict, total=False):
    key: str
    name: str


class TypeListMatch(TypedDict, total=False):
    key: str
    name: str

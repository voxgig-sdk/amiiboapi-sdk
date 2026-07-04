# Typed models for the Amiiboapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Amiibo:
    amiibo_series: Optional[str] = None
    character: Optional[str] = None
    game_series: Optional[str] = None
    head: Optional[str] = None
    image: Optional[str] = None
    name: Optional[str] = None
    release: Optional[dict] = None
    tail: Optional[str] = None
    type: Optional[str] = None


@dataclass
class AmiiboListMatch:
    amiibo_series: Optional[str] = None
    character: Optional[str] = None
    game_series: Optional[str] = None
    head: Optional[str] = None
    image: Optional[str] = None
    name: Optional[str] = None
    release: Optional[dict] = None
    tail: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Amiiboseries:
    key: Optional[str] = None
    name: Optional[str] = None


@dataclass
class AmiiboseriesListMatch:
    key: Optional[str] = None
    name: Optional[str] = None


@dataclass
class Character:
    key: Optional[str] = None
    name: Optional[str] = None


@dataclass
class CharacterListMatch:
    key: Optional[str] = None
    name: Optional[str] = None


@dataclass
class Gameseries:
    key: Optional[str] = None
    name: Optional[str] = None


@dataclass
class GameseriesListMatch:
    key: Optional[str] = None
    name: Optional[str] = None


@dataclass
class Type:
    key: Optional[str] = None
    name: Optional[str] = None


@dataclass
class TypeListMatch:
    key: Optional[str] = None
    name: Optional[str] = None


export interface Amiibo {
    amiiboSeries?: string;
    character?: string;
    gameSeries?: string;
    head?: string;
    image?: string;
    name?: string;
    release?: Record<string, any>;
    tail?: string;
    type?: string;
}
export interface AmiiboListMatch {
    amiibo_series?: string;
    character?: string;
    game_series?: string;
    head?: string;
    name?: string;
    showusage?: boolean;
    tail?: string;
    type?: string;
}
export interface Amiiboseries {
    key?: string;
    name?: string;
}
export interface AmiiboseriesListMatch {
    key?: string;
    name?: string;
}
export interface Character {
    key?: string;
    name?: string;
}
export interface CharacterListMatch {
    key?: string;
    name?: string;
}
export interface Gameseries {
    key?: string;
    name?: string;
}
export interface GameseriesListMatch {
    key?: string;
    name?: string;
}
export interface Type {
    key?: string;
    name?: string;
}
export interface TypeListMatch {
    key?: string;
    name?: string;
}

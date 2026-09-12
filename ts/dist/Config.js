"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Amiiboapi',
        slug: "amiiboapi",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://www.amiiboapi.com/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            amiibo: {},
            amiiboseries: {},
            character: {},
            gameseries: {},
            type: {},
        }
    };
    entity = {
        "amiibo": {
            "fields": [
                {
                    "name": "amiiboSeries",
                    "short": "The amiibo series the amiibo belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "character",
                    "short": "The character of the amiibo",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameSeries",
                    "short": "The game series the amiibo is from",
                    "type": "`$STRING`"
                },
                {
                    "name": "head",
                    "short": "The head hex value of the amiibo",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "image",
                    "short": "URL to the amiibo image",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the amiibo",
                    "type": "`$STRING`"
                },
                {
                    "name": "release",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "tail",
                    "short": "The tail hex value of the amiibo",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of amiibo (e.g., Figure, Card)",
                    "type": "`$STRING`"
                }
            ],
            "name": "amiibo",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "amiibo_series",
                                        "orig": "amiibo_series",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "character",
                                        "orig": "character",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "game_series",
                                        "orig": "game_series",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "head",
                                        "orig": "head",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "showusage",
                                        "orig": "showusage",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "tail",
                                        "orig": "tail",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/amiibo",
                            "segments": [
                                {
                                    "lit": "amiibo"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "amiibo_series",
                                    "character",
                                    "game_series",
                                    "head",
                                    "name",
                                    "showusage",
                                    "tail",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.amiibo`"
                            },
                            "parts": [
                                "amiibo"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "amiiboseries": {
            "fields": [
                {
                    "name": "key",
                    "short": "Unique key for the amiibo series",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the amiibo series",
                    "type": "`$STRING`"
                }
            ],
            "name": "amiiboseries",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/amiiboseries",
                            "segments": [
                                {
                                    "lit": "amiiboseries"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.amiibo`"
                            },
                            "parts": [
                                "amiiboseries"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "character": {
            "fields": [
                {
                    "name": "key",
                    "short": "Unique key for the character",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the character",
                    "type": "`$STRING`"
                }
            ],
            "name": "character",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/character",
                            "segments": [
                                {
                                    "lit": "character"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.amiibo`"
                            },
                            "parts": [
                                "character"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "gameseries": {
            "fields": [
                {
                    "name": "key",
                    "short": "Unique key for the game series",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the game series",
                    "type": "`$STRING`"
                }
            ],
            "name": "gameseries",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/gameseries",
                            "segments": [
                                {
                                    "lit": "gameseries"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.amiibo`"
                            },
                            "parts": [
                                "gameseries"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "type": {
            "fields": [
                {
                    "name": "key",
                    "short": "Unique key for the amiibo type",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Name of the amiibo type",
                    "type": "`$STRING`"
                }
            ],
            "name": "type",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/type",
                            "segments": [
                                {
                                    "lit": "type"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.amiibo`"
                            },
                            "parts": [
                                "type"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map
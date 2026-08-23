package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Amiiboapi",
			"slug": "amiiboapi",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://www.amiiboapi.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"amiibo": map[string]any{},
				"amiiboseries": map[string]any{},
				"character": map[string]any{},
				"gameseries": map[string]any{},
				"type": map[string]any{},
			},
		},
		"entity": map[string]any{
			"amiibo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amiiboSeries",
						"short": "The amiibo series the amiibo belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "character",
						"short": "The character of the amiibo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gameSeries",
						"short": "The game series the amiibo is from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "head",
						"short": "The head hex value of the amiibo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image",
						"short": "URL to the amiibo image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the amiibo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "release",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tail",
						"short": "The tail hex value of the amiibo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of amiibo (e.g., Figure, Card)",
						"type": "`$STRING`",
					},
				},
				"name": "amiibo",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "amiibo_series",
											"orig": "amiibo_series",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "character",
											"orig": "character",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "game_series",
											"orig": "game_series",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "head",
											"orig": "head",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "showusage",
											"orig": "showusage",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "tail",
											"orig": "tail",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/amiibo",
								"parts": []any{
									"amiibo",
								},
								"select": map[string]any{
									"exist": []any{
										"amiibo_series",
										"character",
										"game_series",
										"head",
										"name",
										"showusage",
										"tail",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"amiiboseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key",
						"short": "Unique key for the amiibo series",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the amiibo series",
						"type": "`$STRING`",
					},
				},
				"name": "amiiboseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/amiiboseries",
								"parts": []any{
									"amiiboseries",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key",
						"short": "Unique key for the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the character",
						"type": "`$STRING`",
					},
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/character",
								"parts": []any{
									"character",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"gameseries": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key",
						"short": "Unique key for the game series",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the game series",
						"type": "`$STRING`",
					},
				},
				"name": "gameseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/gameseries",
								"parts": []any{
									"gameseries",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key",
						"short": "Unique key for the amiibo type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the amiibo type",
						"type": "`$STRING`",
					},
				},
				"name": "type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/type",
								"parts": []any{
									"type",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

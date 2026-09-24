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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Amiibo Series",
						"type": "`$STRING`",
						"short": "The amiibo series the amiibo belongs to",
					},
					map[string]any{
						"name": "character",
						"title": "Character",
						"type": "`$STRING`",
						"short": "The character of the amiibo",
					},
					map[string]any{
						"name": "gameSeries",
						"title": "Game Series",
						"type": "`$STRING`",
						"short": "The game series the amiibo is from",
					},
					map[string]any{
						"name": "head",
						"title": "Head",
						"type": "`$STRING`",
						"short": "The head hex value of the amiibo",
					},
					map[string]any{
						"name": "image",
						"title": "Image",
						"type": "`$STRING`",
						"short": "URL to the amiibo image",
						"format": "uri",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the amiibo",
					},
					map[string]any{
						"name": "release",
						"title": "Release",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tail",
						"title": "Tail",
						"type": "`$STRING`",
						"short": "The tail hex value of the amiibo",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "The type of amiibo (e.g., Figure, Card)",
					},
				},
				"name": "amiibo",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/amiibo",
								"segments": []any{
									map[string]any{
										"lit": "amiibo",
									},
								},
								"parts": []any{
									"amiibo",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "amiibo_series",
											"orig": "amiibo_series",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "character",
											"orig": "character",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "game_series",
											"orig": "game_series",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "head",
											"orig": "head",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "showusage",
											"orig": "showusage",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "tail",
											"orig": "tail",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
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
						"title": "Key",
						"type": "`$STRING`",
						"short": "Unique key for the amiibo series",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the amiibo series",
					},
				},
				"name": "amiiboseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/amiiboseries",
								"segments": []any{
									map[string]any{
										"lit": "amiiboseries",
									},
								},
								"parts": []any{
									"amiiboseries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Key",
						"type": "`$STRING`",
						"short": "Unique key for the character",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the character",
					},
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/character",
								"segments": []any{
									map[string]any{
										"lit": "character",
									},
								},
								"parts": []any{
									"character",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Key",
						"type": "`$STRING`",
						"short": "Unique key for the game series",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the game series",
					},
				},
				"name": "gameseries",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/gameseries",
								"segments": []any{
									map[string]any{
										"lit": "gameseries",
									},
								},
								"parts": []any{
									"gameseries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Key",
						"type": "`$STRING`",
						"short": "Unique key for the amiibo type",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the amiibo type",
					},
				},
				"name": "type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/type",
								"segments": []any{
									map[string]any{
										"lit": "type",
									},
								},
								"parts": []any{
									"type",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.amiibo`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

# Amiiboapi SDK configuration

module AmiiboapiConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Amiiboapi",
        "slug" => "amiiboapi",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.amiiboapi.com/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "amiibo" => {},
          "amiiboseries" => {},
          "character" => {},
          "gameseries" => {},
          "type" => {},
        },
      },
      "entity" => {
        "amiibo" => {
          "fields" => [
            {
              "name" => "amiiboSeries",
              "short" => "The amiibo series the amiibo belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "character",
              "short" => "The character of the amiibo",
              "type" => "`$STRING`",
            },
            {
              "name" => "gameSeries",
              "short" => "The game series the amiibo is from",
              "type" => "`$STRING`",
            },
            {
              "name" => "head",
              "short" => "The head hex value of the amiibo",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "image",
              "short" => "URL to the amiibo image",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "The name of the amiibo",
              "type" => "`$STRING`",
            },
            {
              "name" => "release",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "tail",
              "short" => "The tail hex value of the amiibo",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "The type of amiibo (e.g., Figure, Card)",
              "type" => "`$STRING`",
            },
          ],
          "name" => "amiibo",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amiibo_series",
                        "orig" => "amiibo_series",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "character",
                        "orig" => "character",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "game_series",
                        "orig" => "game_series",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "head",
                        "orig" => "head",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "showusage",
                        "orig" => "showusage",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "tail",
                        "orig" => "tail",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/amiibo",
                  "segments" => [
                    {
                      "lit" => "amiibo",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "amiibo_series",
                      "character",
                      "game_series",
                      "head",
                      "name",
                      "showusage",
                      "tail",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.amiibo`",
                  },
                  "parts" => [
                    "amiibo",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "amiiboseries" => {
          "fields" => [
            {
              "name" => "key",
              "short" => "Unique key for the amiibo series",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the amiibo series",
              "type" => "`$STRING`",
            },
          ],
          "name" => "amiiboseries",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/amiiboseries",
                  "segments" => [
                    {
                      "lit" => "amiiboseries",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.amiibo`",
                  },
                  "parts" => [
                    "amiiboseries",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "character" => {
          "fields" => [
            {
              "name" => "key",
              "short" => "Unique key for the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the character",
              "type" => "`$STRING`",
            },
          ],
          "name" => "character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/character",
                  "segments" => [
                    {
                      "lit" => "character",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.amiibo`",
                  },
                  "parts" => [
                    "character",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "gameseries" => {
          "fields" => [
            {
              "name" => "key",
              "short" => "Unique key for the game series",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the game series",
              "type" => "`$STRING`",
            },
          ],
          "name" => "gameseries",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/gameseries",
                  "segments" => [
                    {
                      "lit" => "gameseries",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.amiibo`",
                  },
                  "parts" => [
                    "gameseries",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "type" => {
          "fields" => [
            {
              "name" => "key",
              "short" => "Unique key for the amiibo type",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the amiibo type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "type",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/type",
                  "segments" => [
                    {
                      "lit" => "type",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.amiibo`",
                  },
                  "parts" => [
                    "type",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    AmiiboapiFeatures.make_feature(name)
  end
end

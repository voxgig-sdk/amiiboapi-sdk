# Amiiboapi SDK configuration

module AmiiboapiConfig
  def self.make_config
    {
      "main" => {
        "name" => "Amiiboapi",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://www.amiiboapi.com/api",
        "auth" => {
          "prefix" => "Bearer",
        },
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
              "name" => "amiibo_series",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "character",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "game_series",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "head",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "image",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "release",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "tail",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "type",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 8,
            },
          ],
          "name" => "amiibo",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amiibo_series",
                        "orig" => "amiibo_series",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "character",
                        "orig" => "character",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "game_series",
                        "orig" => "game_series",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "head",
                        "orig" => "head",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "showusage",
                        "orig" => "showusage",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "tail",
                        "orig" => "tail",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/amiibo",
                  "parts" => [
                    "amiibo",
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
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
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
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
          ],
          "name" => "amiiboseries",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/amiiboseries",
                  "parts" => [
                    "amiiboseries",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
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
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
          ],
          "name" => "character",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/character",
                  "parts" => [
                    "character",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
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
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
          ],
          "name" => "gameseries",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/gameseries",
                  "parts" => [
                    "gameseries",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
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
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
          ],
          "name" => "type",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/type",
                  "parts" => [
                    "type",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
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

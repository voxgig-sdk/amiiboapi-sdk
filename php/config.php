<?php
declare(strict_types=1);

// Amiiboapi SDK configuration

class AmiiboapiConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Amiiboapi",
                "slug" => "amiiboapi",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://www.amiiboapi.com/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "amiibo" => [],
                    "amiiboseries" => [],
                    "character" => [],
                    "gameseries" => [],
                    "type" => [],
                ],
            ],
            "entity" => [
        'amiibo' => [
          'fields' => [
            [
              'name' => 'amiiboSeries',
              'short' => 'The amiibo series the amiibo belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'character',
              'short' => 'The character of the amiibo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'gameSeries',
              'short' => 'The game series the amiibo is from',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'head',
              'short' => 'The head hex value of the amiibo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image',
              'short' => 'URL to the amiibo image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'The name of the amiibo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'release',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'tail',
              'short' => 'The tail hex value of the amiibo',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'The type of amiibo (e.g., Figure, Card)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'amiibo',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'amiibo_series',
                        'orig' => 'amiibo_series',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'character',
                        'orig' => 'character',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'game_series',
                        'orig' => 'game_series',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'head',
                        'orig' => 'head',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'showusage',
                        'orig' => 'showusage',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'tail',
                        'orig' => 'tail',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/amiibo',
                  'parts' => [
                    'amiibo',
                  ],
                  'select' => [
                    'exist' => [
                      'amiibo_series',
                      'character',
                      'game_series',
                      'head',
                      'name',
                      'showusage',
                      'tail',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.amiibo`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'amiiboseries' => [
          'fields' => [
            [
              'name' => 'key',
              'short' => 'Unique key for the amiibo series',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the amiibo series',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'amiiboseries',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/amiiboseries',
                  'parts' => [
                    'amiiboseries',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.amiibo`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'character' => [
          'fields' => [
            [
              'name' => 'key',
              'short' => 'Unique key for the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the character',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/character',
                  'parts' => [
                    'character',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.amiibo`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'gameseries' => [
          'fields' => [
            [
              'name' => 'key',
              'short' => 'Unique key for the game series',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the game series',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'gameseries',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/gameseries',
                  'parts' => [
                    'gameseries',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.amiibo`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'type' => [
          'fields' => [
            [
              'name' => 'key',
              'short' => 'Unique key for the amiibo type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the amiibo type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'type',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/type',
                  'parts' => [
                    'type',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.amiibo`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return AmiiboapiFeatures::make_feature($name);
    }
}

# Amiiboapi PHP SDK Reference

Complete API reference for the Amiiboapi PHP SDK.


## AmiiboapiSDK

### Constructor

```php
require_once __DIR__ . '/amiiboapi_sdk.php';

$client = new AmiiboapiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AmiiboapiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = AmiiboapiSDK::test();
```


### Instance Methods

#### `Amiibo($data = null)`

Create a new `AmiiboEntity` instance. Pass `null` for no initial data.

#### `Amiiboseries($data = null)`

Create a new `AmiiboseriesEntity` instance. Pass `null` for no initial data.

#### `Character($data = null)`

Create a new `CharacterEntity` instance. Pass `null` for no initial data.

#### `Gameseries($data = null)`

Create a new `GameseriesEntity` instance. Pass `null` for no initial data.

#### `Type($data = null)`

Create a new `TypeEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## AmiiboEntity

```php
$amiibo = $client->Amiibo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amiibo_series` | ``$STRING`` | No |  |
| `character` | ``$STRING`` | No |  |
| `game_series` | ``$STRING`` | No |  |
| `head` | ``$STRING`` | No |  |
| `image` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `release` | ``$OBJECT`` | No |  |
| `tail` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Amiibo()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): AmiiboEntity`

Create a new `AmiiboEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## AmiiboseriesEntity

```php
$amiiboseries = $client->Amiiboseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Amiiboseries()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): AmiiboseriesEntity`

Create a new `AmiiboseriesEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CharacterEntity

```php
$character = $client->Character();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Character()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CharacterEntity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GameseriesEntity

```php
$gameseries = $client->Gameseries();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Gameseries()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GameseriesEntity`

Create a new `GameseriesEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## TypeEntity

```php
$type = $client->Type();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Type()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): TypeEntity`

Create a new `TypeEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new AmiiboapiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


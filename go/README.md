# Amiiboapi Golang SDK



The Golang SDK for the Amiiboapi API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Amiibo(nil)` — each with the same small set of operations (`List`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/amiiboapi-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/amiiboapi-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/amiiboapi-sdk/go=../amiiboapi-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/amiiboapi-sdk/go"
)

func main() {
    client := sdk.New()

    // List amiibo records — the value is the array of records itself.
    amiibos, err := client.Amiibo(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range amiibos.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
characters, err := client.Character(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = characters
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

character, err := client.Character(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(character) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewAmiiboapiSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
AMIIBOAPI_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewAmiiboapiSDK

```go
func NewAmiiboapiSDK(options map[string]any) *AmiiboapiSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *AmiiboapiSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### AmiiboapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Amiibo` | `(data map[string]any) AmiiboapiEntity` | Create an Amiibo entity instance. |
| `Amiiboseries` | `(data map[string]any) AmiiboapiEntity` | Create an Amiiboseries entity instance. |
| `Character` | `(data map[string]any) AmiiboapiEntity` | Create a Character entity instance. |
| `Gameseries` | `(data map[string]any) AmiiboapiEntity` | Create a Gameseries entity instance. |
| `Type` | `(data map[string]any) AmiiboapiEntity` | Create a Type entity instance. |

### Entity interface (AmiiboapiEntity)

All entities implement the `AmiiboapiEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    amiibo, err := client.Amiibo(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // amiibo is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Amiibo

| Field | Description |
| --- | --- |
| `"amiiboSeries"` | The amiibo series the amiibo belongs to |
| `"character"` | The character of the amiibo |
| `"gameSeries"` | The game series the amiibo is from |
| `"head"` | The head hex value of the amiibo |
| `"image"` | URL to the amiibo image |
| `"name"` | The name of the amiibo |
| `"release"` |  |
| `"tail"` | The tail hex value of the amiibo |
| `"type"` | The type of amiibo (e.g., Figure, Card) |

Operations: List.

API path: `/amiibo`

#### Amiiboseries

| Field | Description |
| --- | --- |
| `"key"` | Unique key for the amiibo series |
| `"name"` | Name of the amiibo series |

Operations: List.

API path: `/amiiboseries`

#### Character

| Field | Description |
| --- | --- |
| `"key"` | Unique key for the character |
| `"name"` | Name of the character |

Operations: List.

API path: `/character`

#### Gameseries

| Field | Description |
| --- | --- |
| `"key"` | Unique key for the game series |
| `"name"` | Name of the game series |

Operations: List.

API path: `/gameseries`

#### Type

| Field | Description |
| --- | --- |
| `"key"` | Unique key for the amiibo type |
| `"name"` | Name of the amiibo type |

Operations: List.

API path: `/type`



## Entities


### Amiibo

Create an instance: `amiibo := client.Amiibo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amiiboSeries` | `string` | The amiibo series the amiibo belongs to |
| `character` | `string` | The character of the amiibo |
| `gameSeries` | `string` | The game series the amiibo is from |
| `head` | `string` | The head hex value of the amiibo |
| `image` | `string` | URL to the amiibo image |
| `name` | `string` | The name of the amiibo |
| `release` | `map[string]any` |  |
| `tail` | `string` | The tail hex value of the amiibo |
| `type` | `string` | The type of amiibo (e.g., Figure, Card) |

#### Example: List

```go
amiibos, err := client.Amiibo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(amiibos) // the array of records
```


### Amiiboseries

Create an instance: `amiiboseries := client.Amiiboseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Unique key for the amiibo series |
| `name` | `string` | Name of the amiibo series |

#### Example: List

```go
amiiboseriess, err := client.Amiiboseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(amiiboseriess) // the array of records
```


### Character

Create an instance: `character := client.Character(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Unique key for the character |
| `name` | `string` | Name of the character |

#### Example: List

```go
characters, err := client.Character(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(characters) // the array of records
```


### Gameseries

Create an instance: `gameseries := client.Gameseries(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Unique key for the game series |
| `name` | `string` | Name of the game series |

#### Example: List

```go
gameseriess, err := client.Gameseries(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gameseriess) // the array of records
```


### Type

Create an instance: `type_ := client.Type(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Unique key for the amiibo type |
| `name` | `string` | Name of the amiibo type |

#### Example: List

```go
type_s, err := client.Type(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(type_s) // the array of records
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/amiiboapi-sdk/go/
├── amiiboapi.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/amiiboapi-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
character := client.Character(nil)
character.List(nil, nil)

// character.Data() now returns the character data from the last list
// character.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

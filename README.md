# Amiiboapi SDK

Read-only catalogue of every Nintendo Amiibo figure, with characters, game series and types

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About AmiiboAPI

[AmiiboAPI](https://www.amiiboapi.com/) is a free, read-only RESTful API that exposes information about Nintendo's Amiibo figures and cards. It is maintained by [N3evin](https://github.com/N3evin/AmiiboAPI) and is widely used for hobby projects, learning REST, and building Amiibo-related tools.

What you can pull from the API:

- The full Amiibo catalogue or a subset filtered by name, identifier (head/tail hex keys), character, game series, Amiibo series or type.
- Lookup endpoints for the supporting taxonomies: types (`figure`, `card`, `yarn`, `band`), Amiibo series, game series and characters.
- Per-figure metadata such as the display name, head/tail identifiers, image URL, type, character, game series, Amiibo series, and release dates per region.

The service uses HTTPS at `https://www.amiiboapi.com/api` and requires no authentication. CORS is enabled in the upstream Flask application, so it can be called directly from browser code. There is no published rate limit, but the API is community-funded and should not be hammered.

## Try it

**TypeScript**
```bash
npm install amiiboapi
```

**Python**
```bash
pip install amiiboapi-sdk
```

**PHP**
```bash
composer require voxgig/amiiboapi-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/amiiboapi-sdk/go
```

**Ruby**
```bash
gem install amiiboapi-sdk
```

**Lua**
```bash
luarocks install amiiboapi-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AmiiboapiSDK } from 'amiiboapi'

const client = new AmiiboapiSDK({})

// List all amiibos
const amiibos = await client.Amiibo().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o amiiboapi-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "amiiboapi": {
      "command": "/abs/path/to/amiiboapi-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Amiibo** | An individual Amiibo figure or card, including its name, head/tail identifiers, image, type, character, Amiibo series, game series and per-region release dates. Served from `/api/amiibo` with optional query filters such as `?name=`, `?head=`, `?tail=` or `?id=`. | `/amiibo` |
| **Amiiboseries** | A collectible Amiibo series grouping (for example, Super Smash Bros. or Animal Crossing). Served from `/api/amiiboseries`. | `/amiiboseries` |
| **Character** | A Nintendo character that one or more Amiibo represent (for example, Mario or Link). Served from `/api/character`. | `/character` |
| **Gameseries** | A Nintendo game series associated with Amiibo figures (for example, The Legend of Zelda). Served from `/api/gameseries`. | `/gameseries` |
| **Type** | The physical form factor of an Amiibo, such as `figure`, `card`, `yarn` or `band`. Served from `/api/type`. | `/type` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from amiiboapi_sdk import AmiiboapiSDK

client = AmiiboapiSDK({})

# List all amiibos
amiibos, err = client.Amiibo(None).list(None, None)
```

### PHP

```php
<?php
require_once 'amiiboapi_sdk.php';

$client = new AmiiboapiSDK([]);

// List all amiibos
[$amiibos, $err] = $client->Amiibo(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/amiiboapi-sdk/go"

client := sdk.NewAmiiboapiSDK(map[string]any{})

// List all amiibos
amiibos, err := client.Amiibo(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Amiiboapi_sdk"

client = AmiiboapiSDK.new({})

# List all amiibos
amiibos, err = client.Amiibo(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("amiiboapi_sdk")

local client = sdk.new({})

-- List all amiibos
local amiibos, err = client:Amiibo(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AmiiboapiSDK.test()
const result = await client.Amiibo().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AmiiboapiSDK.test(None, None)
result, err = client.Amiibo(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AmiiboapiSDK::test(null, null);
[$result, $err] = $client->Amiibo(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Amiibo(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AmiiboapiSDK.test(nil, nil)
result, err = client.Amiibo(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Amiibo(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the AmiiboAPI

- Upstream: [https://www.amiiboapi.com/](https://www.amiiboapi.com/)
- API docs: [https://www.amiiboapi.com/docs/](https://www.amiiboapi.com/docs/)

- Project code is released under the MIT licence (see the [N3evin/AmiiboAPI](https://github.com/N3evin/AmiiboAPI) repository).
- The underlying amiibo data is community-maintained, drawing on a Google Sheets database, amiibo.life and user submissions.
- No authentication or API key is required; please be considerate with request volume.
- As of late 2025 the upstream repository is archived (read-only), though the hosted data continues to be updated.

---

Generated from the AmiiboAPI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

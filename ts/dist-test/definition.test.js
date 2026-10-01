"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "amiibo",
        "accessor": "Amiibo",
        "op": "list",
        "method": "GET",
        "path": "/amiibo",
        "args": [],
        "select": {
            "amiibo_series": "v1",
            "character": "v1",
            "game_series": "v1",
            "head": "v1",
            "name": "v1",
            "showusage": "v1",
            "tail": "v1",
            "type": "v1"
        },
        "headers": [],
        "query": [
            "name",
            "head",
            "tail",
            "type",
            "character",
            "gameSeries",
            "amiiboSeries",
            "showusage"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "amiibo": [
                {
                    "amiiboSeries": "x",
                    "character": "x",
                    "gameSeries": "x",
                    "head": "x",
                    "image": "x",
                    "name": "x",
                    "release": {
                        "au": "2026-01-01",
                        "eu": "2026-01-01",
                        "jp": "2026-01-01",
                        "na": "2026-01-01"
                    },
                    "tail": "x",
                    "type": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "amiiboseries",
        "accessor": "Amiiboseries",
        "op": "list",
        "method": "GET",
        "path": "/amiiboseries",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "amiibo": [
                {
                    "key": "x",
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "list",
        "method": "GET",
        "path": "/character",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "amiibo": [
                {
                    "key": "x",
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "gameseries",
        "accessor": "Gameseries",
        "op": "list",
        "method": "GET",
        "path": "/gameseries",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "amiibo": [
                {
                    "key": "x",
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "type",
        "accessor": "Type",
        "op": "list",
        "method": "GET",
        "path": "/type",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "amiibo": [
                {
                    "key": "x",
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map
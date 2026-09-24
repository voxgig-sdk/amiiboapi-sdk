"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AmiiboEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AMIIBOAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AMIIBOAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.AmiiboapiSDK.test();
        const ent = testsdk.Amiibo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AMIIBOAPI_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'amiibo.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amiiboSeries": { "a": true, "h": "Amiibo Series", "n": "amiiboSeries", "r": false, "sh": "The amiibo series the amiibo belongs to", "t": "`$STRING`", "key$": "amiiboSeries", "index$": 0 }, "character": { "a": true, "h": "Character", "n": "character", "r": false, "sh": "The character of the amiibo", "t": "`$STRING`", "key$": "character", "index$": 1 }, "gameSeries": { "a": true, "h": "Game Series", "n": "gameSeries", "r": false, "sh": "The game series the amiibo is from", "t": "`$STRING`", "key$": "gameSeries", "index$": 2 }, "head": { "a": true, "h": "Head", "n": "head", "r": false, "sh": "The head hex value of the amiibo", "t": "`$STRING`", "key$": "head", "index$": 3 }, "image": { "a": true, "fo": "uri", "h": "Image", "n": "image", "r": false, "sh": "URL to the amiibo image", "t": "`$STRING`", "key$": "image", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the amiibo", "t": "`$STRING`", "key$": "name", "index$": 5 }, "release": { "a": true, "h": "Release", "n": "release", "r": false, "t": "`$OBJECT`", "key$": "release", "index$": 6 }, "tail": { "a": true, "h": "Tail", "n": "tail", "r": false, "sh": "The tail hex value of the amiibo", "t": "`$STRING`", "key$": "tail", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of amiibo (e.g., Figure, Card)", "t": "`$STRING`", "key$": "type", "index$": 8 } }, "name": "amiibo", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /amiibo", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "amiibo_series", "or": "amiibo_series", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "character", "or": "character", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "game_series", "or": "game_series", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "head", "or": "head", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "showusage", "or": "showusage", "r": false, "t": "`$BOOLEAN`", "index$": 5 }, { "a": true, "k": "query", "n": "tail", "or": "tail", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/amiibo", "q": { "exist": ["amiibo_series", "character", "game_series", "head", "name", "showusage", "tail", "type"] }, "r": {}, "s": [{ "lit": "amiibo" }], "t": { "req": "`reqdata`", "res": "`body.amiibo`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "amiibo", "name__orig": "amiibo", "Name": "Amiibo", "name_": "amiibo", "name-": "amiibo", "NAME": "AMIIBO", "index$": 0 }, { "active": true, "entity": "amiibo", "key$": "BasicAmiiboFlow", "kind": "basic", "name": "BasicAmiiboFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "amiibo_ref01" } }], "index$": 0 }] }, 'Amiibo', { "GET /amiibo": { "protocol": "http", "operationId": "getAmiibo", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "amiibo": { "items": { "properties": { "amiiboSeries": { "description": "The amiibo series the amiibo belongs to", "type": "string", "key$": "amiiboSeries" }, "character": { "description": "The character of the amiibo", "type": "string", "key$": "character" }, "gameSeries": { "description": "The game series the amiibo is from", "type": "string", "key$": "gameSeries" }, "head": { "description": "The head hex value of the amiibo", "type": "string", "key$": "head" }, "image": { "description": "URL to the amiibo image", "format": "uri", "type": "string", "key$": "image" }, "name": { "description": "The name of the amiibo", "type": "string", "key$": "name" }, "release": { "properties": { "au": { "description": "Release date in Australia", "format": "date", "type": "string" }, "eu": { "description": "Release date in Europe", "format": "date", "type": "string" }, "jp": { "description": "Release date in Japan", "format": "date", "type": "string" }, "na": { "description": "Release date in North America", "format": "date", "type": "string" } }, "type": "object", "key$": "release" }, "tail": { "description": "The tail hex value of the amiibo", "type": "string", "key$": "tail" }, "type": { "description": "The type of amiibo (e.g., Figure, Card)", "type": "string", "key$": "type" } }, "type": "object", "index$": 0 }, "key$": "amiibo", "type": "array" } } } } } }, "404": { "description": "No amiibos found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "example": "No amiibos found" } } } } } } }, "parameters": [{ "name": "name", "in": "query", "description": "Filter by amiibo name", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "head", "in": "query", "description": "Filter by amiibo head hex value", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "tail", "in": "query", "description": "Filter by amiibo tail hex value", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "type", "in": "query", "description": "Filter by amiibo type (e.g., Figure, Card, Yarn)", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "character", "in": "query", "description": "Filter by character name", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "gameSeries", "in": "query", "description": "Filter by game series", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "amiiboSeries", "in": "query", "description": "Filter by amiibo series", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "showusage", "in": "query", "description": "Show game usage information", "required": false, "schema": { "type": "boolean" }, "index$": 7 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let amiibo_ref01_data = Object.values(setup.data.existing.amiibo)[0];
        // LIST
        const amiibo_ref01_ent = client.Amiibo();
        const amiibo_ref01_match = {};
        const amiibo_ref01_list = (await amiibo_ref01_ent.list(amiibo_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/amiibo/AmiiboTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.AmiiboapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['amiibo01', 'amiibo02', 'amiibo03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AMIIBOAPI_TEST_AMIIBO_ENTID': idmap,
        'AMIIBOAPI_TEST_LIVE': 'FALSE',
        'AMIIBOAPI_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['AMIIBOAPI_TEST_AMIIBO_ENTID'];
    const live = 'TRUE' === env.AMIIBOAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AMIIBOAPI_TEST_AMIIBO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.AmiiboapiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.AMIIBOAPI_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AmiiboEntity.test.js.map
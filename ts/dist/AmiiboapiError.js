"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmiiboapiError = void 0;
class AmiiboapiError extends Error {
    isAmiiboapiError = true;
    sdk = 'Amiiboapi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.AmiiboapiError = AmiiboapiError;
//# sourceMappingURL=AmiiboapiError.js.map
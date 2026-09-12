import { Context } from './Context';
declare class AmiiboapiError extends Error {
    isAmiiboapiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { AmiiboapiError };

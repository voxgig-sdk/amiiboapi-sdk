import { AmiiboEntity } from './entity/AmiiboEntity';
import { AmiiboseriesEntity } from './entity/AmiiboseriesEntity';
import { CharacterEntity } from './entity/CharacterEntity';
import { GameseriesEntity } from './entity/GameseriesEntity';
import { TypeEntity } from './entity/TypeEntity';
export type * from './AmiiboapiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { AmiiboapiEntityBase } from './AmiiboapiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class AmiiboapiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Amiibo(entopts?: Record<string, any>): AmiiboEntity;
    Amiiboseries(entopts?: Record<string, any>): AmiiboseriesEntity;
    Character(entopts?: Record<string, any>): CharacterEntity;
    Gameseries(entopts?: Record<string, any>): GameseriesEntity;
    Type(entopts?: Record<string, any>): TypeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): AmiiboapiSDK;
    tester(testopts?: any, sdkopts?: any): AmiiboapiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof AmiiboapiSDK;
export { stdutil, config, BaseFeature, AmiiboapiEntityBase, AmiiboapiSDK, SDK, };

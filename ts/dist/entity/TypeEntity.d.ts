import { AmiiboapiEntityBase } from '../AmiiboapiEntityBase';
import type { AmiiboapiSDK } from '../AmiiboapiSDK';
import type { Control } from '../types';
import type { Type, TypeListMatch } from '../AmiiboapiTypes';
declare class TypeEntity extends AmiiboapiEntityBase<Type> {
    constructor(client: AmiiboapiSDK, entopts: any);
    make(this: TypeEntity): TypeEntity;
    list(this: any, reqmatch?: TypeListMatch, ctrl?: Control): Promise<TypeEntity[]>;
}
export { TypeEntity };

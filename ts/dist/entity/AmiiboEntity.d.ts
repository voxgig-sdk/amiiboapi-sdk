import { AmiiboapiEntityBase } from '../AmiiboapiEntityBase';
import type { AmiiboapiSDK } from '../AmiiboapiSDK';
import type { Control } from '../types';
import type { Amiibo, AmiiboListMatch } from '../AmiiboapiTypes';
declare class AmiiboEntity extends AmiiboapiEntityBase<Amiibo> {
    constructor(client: AmiiboapiSDK, entopts: any);
    make(this: AmiiboEntity): AmiiboEntity;
    list(this: any, reqmatch?: AmiiboListMatch, ctrl?: Control): Promise<AmiiboEntity[]>;
}
export { AmiiboEntity };

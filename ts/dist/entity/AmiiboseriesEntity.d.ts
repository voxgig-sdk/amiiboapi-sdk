import { AmiiboapiEntityBase } from '../AmiiboapiEntityBase';
import type { AmiiboapiSDK } from '../AmiiboapiSDK';
import type { Control } from '../types';
import type { Amiiboseries, AmiiboseriesListMatch } from '../AmiiboapiTypes';
declare class AmiiboseriesEntity extends AmiiboapiEntityBase<Amiiboseries> {
    constructor(client: AmiiboapiSDK, entopts: any);
    make(this: AmiiboseriesEntity): AmiiboseriesEntity;
    list(this: any, reqmatch?: AmiiboseriesListMatch, ctrl?: Control): Promise<AmiiboseriesEntity[]>;
}
export { AmiiboseriesEntity };

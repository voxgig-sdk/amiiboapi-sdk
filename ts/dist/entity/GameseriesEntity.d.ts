import { AmiiboapiEntityBase } from '../AmiiboapiEntityBase';
import type { AmiiboapiSDK } from '../AmiiboapiSDK';
import type { Control } from '../types';
import type { Gameseries, GameseriesListMatch } from '../AmiiboapiTypes';
declare class GameseriesEntity extends AmiiboapiEntityBase<Gameseries> {
    constructor(client: AmiiboapiSDK, entopts: any);
    make(this: GameseriesEntity): GameseriesEntity;
    list(this: any, reqmatch?: GameseriesListMatch, ctrl?: Control): Promise<GameseriesEntity[]>;
}
export { GameseriesEntity };

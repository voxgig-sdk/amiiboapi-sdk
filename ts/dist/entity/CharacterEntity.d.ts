import { AmiiboapiEntityBase } from '../AmiiboapiEntityBase';
import type { AmiiboapiSDK } from '../AmiiboapiSDK';
import type { Control } from '../types';
import type { Character, CharacterListMatch } from '../AmiiboapiTypes';
declare class CharacterEntity extends AmiiboapiEntityBase<Character> {
    constructor(client: AmiiboapiSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };

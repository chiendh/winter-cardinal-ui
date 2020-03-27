import { DApplicationLayerLike } from "../d-application-layer-like";
import { DApplicationLike, DApplicationTarget } from "../d-application-like";
export declare class UtilOverlay {
    protected _layer: DApplicationLayerLike | null;
    protected _application: DApplicationLike | null;
    constructor(options?: {
        parent?: unknown;
    });
    get picked(): DApplicationLayerLike | null;
    pick(target: DApplicationTarget): DApplicationLayerLike;
}

import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplicationLayerStageLike } from "./d-application-layer-stage-like";
import { DApplicationLike, DApplicationTarget } from "./d-application-like";
export declare class DApplications {
    protected static INSTANCES: DApplicationLike[];
    static add(instance: DApplicationLike): void;
    static first(): DApplicationLike;
    static last(): DApplicationLike;
    static get(index: number): DApplicationLike | null;
    static indexOf(instance: DApplicationLike): number;
    static size(): number;
    protected static toStage(target: DApplicationTarget): DApplicationLayerStageLike | null;
    static find(target: DApplicationTarget): DApplicationLike | null;
    static getLayerBase(target: DApplicationTarget): DApplicationLayerLike | null;
    static getLayerOverlay(target: DApplicationTarget): DApplicationLayerLike | null;
    static getLayer(target: DApplicationTarget): DApplicationLayerLike | null;
    static update(target?: DApplicationTarget): void;
    static render(target?: DApplicationTarget): void;
}

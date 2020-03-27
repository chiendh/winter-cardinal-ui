import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DThemeViewDrag, DViewDrag, DViewDragOptions } from "./d-view-drag";
import { DViewStopper } from "./d-view-stopper";
import { DViewToTarget } from "./d-view-to-target";
import { UtilDrag } from "./util/util-drag";
export declare class DViewDragImpl implements DViewDrag {
    protected _parent: DBase;
    protected _toTarget: DViewToTarget;
    protected _stopper: DViewStopper;
    protected _dragUtil?: UtilDrag;
    protected _bind: boolean;
    constructor(parent: DBase, toTarget: DViewToTarget, stopper: DViewStopper, theme: DThemeViewDrag, options: DViewDragOptions | undefined);
    stop(): void;
    onDown(e: interaction.InteractionEvent): void;
}

import { interaction, utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartSelection, DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionSub, DChartSelectionSubOptions } from "./d-chart-selection-sub";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
export interface DChartSelectionSimpleOptions {
    selected?: DChartSelectionSubOptions;
    hovered?: DChartSelectionSubOptions;
    point?: DChartSelectionPoint | (keyof typeof DChartSelectionPoint);
    on?: DBaseOnOptions;
}
export declare class DChartSelectionSimple extends utils.EventEmitter implements DChartSelection {
    protected static WORK_SELECT: DChartSeriesHitResult;
    protected _container: DChartSeriesContainer | null;
    protected _selected: DChartSelectionSub;
    protected _hovered: DChartSelectionSub;
    protected _onClickBound: (e: interaction.InteractionEvent) => void;
    protected _onMoveBound: (e: interaction.InteractionEvent) => void;
    constructor(options?: DChartSelectionSimpleOptions);
    protected newSelected(point: DChartSelectionPoint, options?: DChartSelectionSubOptions): DChartSelectionSub;
    protected newHovered(point: DChartSelectionPoint, options?: DChartSelectionSubOptions): DChartSelectionSub;
    protected toSubOptions(point: DChartSelectionPoint, options: DChartSelectionSubOptions | undefined, state: DBaseState): DChartSelectionSubOptions;
    protected onClick(e: interaction.InteractionEvent): void;
    protected onMove(e: interaction.InteractionEvent): void;
    bind(container: DChartSeriesContainer): void;
    unbind(): void;
    get selected(): DChartSelectionSub;
    get hovered(): DChartSelectionSub;
    update(): void;
}

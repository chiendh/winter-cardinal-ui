import { interaction, Point, Sprite, Texture } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DPickerColor } from "./d-picker-color";
import { DPickerColorGradientData, DPickerColorGradientDataLike } from "./d-picker-color-gradient-data";
import { DPickerColorGradientDataView } from "./d-picker-color-gradient-data-view";
import { DPickerColorGradientPoint } from "./d-picker-color-gradient-point";
import { DPickerColorGradientRecent } from "./d-picker-color-gradient-recent";
export interface DPickerColorGradientOptions<THEME extends DThemePickerColorGradient = DThemePickerColorGradient> extends DBaseOptions<THEME> {
}
export interface DThemePickerColorGradient extends DThemeBase {
    getGradientPointsWidth(): number;
    getGradientPointsMargin(): number;
    getGradientAnchorTexture(): Texture;
    getGradientAnchorOutlinedTexture(): Texture;
    getGradientAnchorOutlineTexture(): Texture;
    getGradientDirectionMargin(): number;
    getGradientDirectionTexture(): Texture;
    getGradientRecentColumn(): number;
    getGradientRecentWidth(): number;
    getGradientRecentMargin(): number;
    getGradientRecentCount(): number;
    getGradientRecents(): DPickerColorGradientDataLike[];
}
export declare class DPickerColorGradient<THEME extends DThemePickerColorGradient = DThemePickerColorGradient, OPTIONS extends DPickerColorGradientOptions<THEME> = DPickerColorGradientOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected static RECENT_COLOR_GRADIENT: DPickerColorGradientRecent | null;
    protected _picker: DPickerColor;
    protected _view: DPickerColorGradientDataView;
    protected _anchors: Sprite[];
    protected _recent: DPickerColorGradientRecent;
    protected _onAnchorDownBound: (e: InteractionEvent) => void;
    protected _onAnchorMoveBound: (e: InteractionEvent) => void;
    protected _onAnchorUpBound: (e: InteractionEvent) => void;
    protected _data: DPickerColorGradientData;
    protected _work: Point;
    protected init(options?: OPTIONS): void;
    get data(): DPickerColorGradientData;
    get recent(): DPickerColorGradientRecent;
    protected onRecentClick(recentData: DPickerColorGradientDataLike | null): void;
    protected onRecentUpdate(): void;
    protected toAnchorPosition(e: InteractionEvent): number;
    protected onViewDown(e: InteractionEvent): void;
    protected onAnchorDown(e: InteractionEvent): void;
    protected onAnchorSelect(point: DPickerColorGradientPoint): void;
    protected onAnchorColorChange(color: number): void;
    protected onAnchorAlphaChange(alpha: number): void;
    protected onAnchorDragStart(): void;
    protected onAnchorMove(e: InteractionEvent): void;
    protected onAnchorUp(e: InteractionEvent): void;
    protected updateAnchors(): void;
    onKeyDown(e: KeyboardEvent): boolean;
    protected getType(): string;
}

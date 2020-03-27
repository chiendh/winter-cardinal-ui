import { DDragMode } from "../../d-drag-mode";
import { DMouseModifier } from "../../d-mouse-modifier";
import { DThemeView } from "../../d-view";
export declare class DThemeWhiteView implements DThemeView {
    isWheelZoomEnabled(): boolean;
    getWheelZoomSpeed(): number;
    getWheelZoomModifier(): DMouseModifier;
    isWheelTranslationEnabled(): boolean;
    getWheelTranslationSpeed(): number;
    getWheelTranslationModifier(): DMouseModifier;
    isDblClickZoomEnabled(): boolean;
    getDblClickZoomSpeed(): number;
    getDblClickZoomModifier(): DMouseModifier;
    getDblClickZoomDuration(): number;
    getZoomMin(): number;
    getZoomMax(): number;
    getZoomKeepRatio(): boolean;
    getDragMode(): DDragMode;
    getDragModifier(): DMouseModifier;
    getDragDurationPosition(): number;
    getDragDurationScale(): number;
}

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DThemeTextBase } from "../../d-text-base";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteTextBase extends DThemeWhiteBase implements DThemeTextBase {
    getTextAlignVertical(): DAlignVertical;
    getTextAlignHorizontal(): DAlignHorizontal;
    isOverflowMaskEnabled(): boolean;
    isTextDynamic(): boolean;
    getTextStyleClipping(): boolean;
    newTextValue(): any;
    getTextValue(state: DBaseState): any;
    getTextFormatter(): (value: any, caller: any) => string;
}

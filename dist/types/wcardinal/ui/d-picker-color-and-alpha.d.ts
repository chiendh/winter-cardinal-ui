import { DColorAndAlpha } from "./d-color";
export declare class DPickerColorAndAlpha implements DColorAndAlpha {
    protected _colorAndAlpha: DColorAndAlpha;
    protected _onColorChange: (color: number) => void;
    protected _onAlphaChange: (alpha: number) => void;
    constructor(colorAndAlpha: DColorAndAlpha, onColorChange: (color: number) => void, onAlphaChange: (alpha: number) => void);
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
}

import { DDynamicTextMeasureResult } from "./d-dynamic-text-measure-result";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
export declare class DDynamicTextMeasure {
    protected static RESULT: DDynamicTextMeasureResult | null;
    static measure(text: string, atlas: DynamicFontAtlas | null, clippingWidth: number | undefined): DDynamicTextMeasureResult;
}

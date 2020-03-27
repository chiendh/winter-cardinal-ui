import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DContentOptions extends DBaseOptions<DThemeContent> {
}
export interface DThemeContent extends DThemeBase {
}
export declare class DContent extends DBase<DThemeContent, DContentOptions> {
    protected init(options?: DContentOptions): void;
    protected initReflowable(): void;
    protected getType(): string;
}

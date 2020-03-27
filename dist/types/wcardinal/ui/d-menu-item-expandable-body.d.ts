import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
export interface DMenuItemExpandableBodyOptions<THEME extends DThemeMenuItemExpandableBody = DThemeMenuItemExpandableBody> extends DLayoutVerticalOptions<THEME> {
}
export interface DThemeMenuItemExpandableBody extends DThemeLayoutVertical {
}
export declare class DMenuItemExpandableBody<THEME extends DThemeMenuItemExpandableBody = DThemeMenuItemExpandableBody, OPTIONS extends DMenuItemExpandableBodyOptions<THEME> = DMenuItemExpandableBodyOptions<THEME>> extends DLayoutVertical<THEME, OPTIONS> {
    constructor(options?: OPTIONS);
    protected getType(): string;
}

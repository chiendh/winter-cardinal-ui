import { DTheme } from "./d-theme";
export declare class DThemes {
    private static DEFAULT_THEME_CLASS;
    private static INSTANCE;
    static setDefaultThemeClass(theme: new () => DTheme): void;
    static getDefaultThemeClass(): (new () => DTheme) | null;
    static getInstance(): DTheme;
    static setInstance(instance: DTheme): DTheme | null;
}

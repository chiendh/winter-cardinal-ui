import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DNotificationOptions<THEME extends DThemeNotification> extends DBaseOptions<THEME> {
}
export interface DThemeNotification extends DThemeBase {
}
export declare class DNotification<THEME extends DThemeNotification = DThemeNotification, OPTIONS extends DNotificationOptions<THEME> = DNotificationOptions<THEME>> extends DBase<THEME, OPTIONS> {
}

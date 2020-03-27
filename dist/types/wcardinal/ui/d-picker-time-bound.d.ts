export declare type DPickerTimeBoundDate = Date | null;
export interface DPickerTimeBoundOptions {
    date?: DPickerTimeBoundDate;
    inclusive?: boolean;
}
export declare class DPickerTimeBound {
    protected _date: DPickerTimeBoundDate;
    protected _inclusive: boolean;
    protected _onChange: () => void;
    constructor(options: DPickerTimeBoundOptions | undefined, onChange: () => void);
    get date(): DPickerTimeBoundDate;
    set date(date: DPickerTimeBoundDate);
    get inclusive(): boolean;
    set inclusive(inclusive: boolean);
}

import { DBase } from "../d-base";
export declare class Lazy<INSTANCE, OPTIONS> {
    instance: INSTANCE | null;
    newInstance: new (options: OPTIONS) => INSTANCE;
    options: OPTIONS;
    constructor(newInstance: new (options: OPTIONS) => INSTANCE, options: OPTIONS, base?: DBase);
    get(): INSTANCE;
}

export declare class UtilCharacterIterator {
    protected static _instance: UtilCharacterIterator | null;
    protected _target: string;
    protected _position: number;
    constructor();
    get position(): number;
    set position(position: number);
    init(target: string): void;
    hasNext(): boolean;
    protected findNextBreak(target: string, istart: number): number;
    protected isHighSurrogate(code: number): boolean;
    protected isLowSurrogate(code: number): boolean;
    protected isVariationSelector(code: number): boolean;
    next(): string;
    /**
     * Advances the position if the next character is not equal to
     * the given `except`.
     *
     * @param except
     * @return true if the position is advanced
     */
    advance(except?: string): boolean;
    static from(target: string): UtilCharacterIterator;
}

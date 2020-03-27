export declare class UtilRgb {
    static toCode(color: number): string;
    static fromCode(code: string): number | null;
    static fromRgb(r: number, g: number, b: number): number;
    static blend(colorA: number, colorB: number, t: number): number;
    static brighten(color: number, amount: number): number;
    static darken(color: number, amount: number): number;
}

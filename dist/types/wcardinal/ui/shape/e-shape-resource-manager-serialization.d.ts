export declare class EShapeResourceManagerSerialization {
    protected resources: string[];
    protected resourceToIndex: Map<string, number>;
    constructor();
    add(resource: string): number;
    serialize(): string[];
}

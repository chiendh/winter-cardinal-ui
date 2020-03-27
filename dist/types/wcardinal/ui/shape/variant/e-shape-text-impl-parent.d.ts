export interface EShapeTextImplParent {
    uploaded?: {
        isCompatible(parent: unknown): boolean;
    };
    toDirty(): void;
    updateUploaded(): void;
}

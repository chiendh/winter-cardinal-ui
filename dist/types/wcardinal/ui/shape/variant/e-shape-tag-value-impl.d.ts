import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTagValue, EShapeTagValueOrder, EShapeTagValueParent } from "../e-shape-tag-value";
import { EShapeTagValueRange } from "../e-shape-tag-value-range";
export declare class EShapeTagValueImpl implements EShapeTagValue {
    id: string;
    initial: string;
    format: string;
    range: EShapeTagValueRange;
    protected _value: unknown;
    protected _time: number;
    protected _values: unknown[] | undefined;
    protected _times: number[] | undefined;
    protected _capacity: number;
    protected _order: EShapeTagValueOrder;
    protected _parent?: EShapeTagValueParent;
    formatter?: (value: unknown) => unknown;
    constructor();
    get parent(): EShapeTagValueParent | undefined;
    set parent(parent: EShapeTagValueParent | undefined);
    get value(): unknown;
    set value(newValue: unknown);
    get nvalue(): number;
    get values(): unknown[];
    set values(newValues: unknown[]);
    get time(): number;
    set time(newTime: number);
    get times(): number[];
    set times(newTimes: number[]);
    get capacity(): number;
    set capacity(capacity: number);
    get order(): EShapeTagValueOrder;
    set order(order: EShapeTagValueOrder);
    remove(index: number): void;
    removeAll(indices: number[]): void;
    clear(): void;
    /**
     * This method does not copy the `#values` and `#times` for the performance.
     *
     * @param target a copy target
     */
    copy(target: EShapeTagValue): this;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): this;
}

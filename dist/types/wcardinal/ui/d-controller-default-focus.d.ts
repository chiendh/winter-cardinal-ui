import { DControllerFocus, DFocusable, DFocusableMightBe } from "./d-controller-focus";
export declare class DControllerDefaultFocus implements DControllerFocus {
    private _focused;
    setFocused(focusable: DFocusable | null, isFocused: boolean, select: boolean): DFocusable | null;
    getFocused(): DFocusable | null;
    findFocusableParent(mightBeFocusable: DFocusableMightBe | null): DFocusable | null;
    protected isFocusable(target: unknown): target is DFocusable;
    protected isFocusRoot(target: unknown): target is DFocusable;
    findFocusable(target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean, direction: boolean): DFocusable | null;
    protected findFocusableNext(target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean): DFocusable | null;
    protected findFocusablePrevious(target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean): DFocusable | null;
}

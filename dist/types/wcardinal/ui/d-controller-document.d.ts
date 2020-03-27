import { DDocument } from "./d-document";
export interface DControllerDocument<DOCUMENT extends DDocument> {
    isChanged(): boolean;
    isNew(): boolean;
    get(): DOCUMENT | null;
    getName(): string | null;
    save(): Promise<unknown> | boolean;
    saveAs(name: string): Promise<unknown> | boolean;
    delete(): Promise<unknown> | boolean;
}

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeGroupViewer } from "./e-shape-group-viewer";

export class EShapeEmbedded extends EShapeGroupViewer {
	protected _name: string;

	constructor( name: string, type = EShapeType.EMBEDDED ) {
		super( type );
		this._name = name;
	}

	clone(): EShapeEmbedded {
		const constructor = this.constructor as typeof EShapeEmbedded;
		const result = new constructor( this._name ).copy( this );
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const clone = children[ i ].clone();
			clone.parent = result;
			result.children.push( clone );
		}
		result.onChildTransformChange();
		result.toDirty();
		return result;
	}

	serializeChildren( manager: EShapeResourceManagerSerialization ): DDiagramSerializedItem[] {
		return [];
	}

	serializeImage( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	serializeGradient( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	serialize( manager: EShapeResourceManagerSerialization ): DDiagramSerializedItem {
		const result = super.serialize( manager );
		result[ 15 ] = manager.addPiece( this._name );
		return result;
	}
}
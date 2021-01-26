/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectDialogOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectDialog<VALUE> = DThemeTableBodyCellSelectDialog<VALUE>
> extends DButtonOptions<VALUE | null, THEME> {
	/**
	 * False to stop synchronization of the selected value and the text.
	 */
	sync?: boolean;
}

export interface DThemeTableBodyCellSelectDialog<VALUE = unknown> extends DThemeButton<VALUE | null> {
	isSyncEnabled(): boolean;
}

export class DTableBodyCellSelectDialog<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectDialog<VALUE> = DThemeTableBodyCellSelectDialog<VALUE>,
	OPTIONS extends DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME> =
		DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME>
> extends DButton<VALUE | null, THEME, OPTIONS> implements DTableBodyCell<ROW, VALUE | null> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, VALUE | null>;
	protected _onChange: DTableBodyCellOnChange<ROW, VALUE | null>;
	protected _isSyncEnabled: boolean;

	constructor( columnIndex: number, column: DTableColumn<ROW, VALUE | null>, onChange: DTableBodyCellOnChange<ROW, VALUE | null>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
		this._isSyncEnabled = ( options?.sync ?? this.theme.isSyncEnabled() );
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		const selecting = this._column.selecting;
		const dialog = selecting.dialog;
		if( dialog ) {
			const oldValue = this._textValueComputed ?? null;
			selecting.setter( dialog, oldValue );
			dialog.open().then((): void => {
				const newValue = selecting.getter( dialog );
				if( this._isSyncEnabled ) {
					if( newValue !== oldValue ) {
						this.text = newValue;
						this.onValueChange( newValue, oldValue );
					}
				} else {
					this.onValueChange( newValue, null );
				}
			});
		}
	}

	protected onValueChange( newValue: VALUE | null, oldValue: VALUE | null ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter( row, columnIndex, newValue );
			this.emit( "change", newValue, oldValue, this );
			this._onChange( newValue, oldValue, row, rowIndex, columnIndex, this );
		}
	}

	get row(): ROW | undefined {
		return this._row;
	}

	get rowIndex(): number {
		return this._rowIndex;
	}

	get columnIndex(): number {
		return this._columnIndex;
	}

	get column(): DTableColumn<ROW, VALUE | null> {
		return this._column;
	}

	get value(): VALUE | null {
		const textValueComputed = this._textValueComputed;
		if( textValueComputed !== undefined ) {
			return textValueComputed;
		}
		return null;
	}

	set value( value: VALUE | null ) {
		this.text = value;
	}

	set(
		value: VALUE | null, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		if( forcibly ) {
			this._textValue = value as VALUE;
			this._textValueComputed = value as VALUE;
			this.onTextChange();
			this.createOrUpdateText();
		} else {
			this.text = value as VALUE;
		}

		const column = this._column;
		DTableBodyCells.setReadOnly( this, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellSelectDialog";
	}
}

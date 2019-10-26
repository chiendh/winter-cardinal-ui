/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBorderMask } from "./d-border";
import { DOutline } from "./d-outline";
import { DStateAware } from "./d-state-aware";
import { utilIsFunction } from "./util/util-is-function";
import { utilIsString } from "./util/util-is-string";

type Callback = () => void;

export class DBaseOutline implements DOutline {
	protected _theme: DThemeBase;
	protected _color?: DStateAware<number | null | undefined> | number | null;
	protected _alpha?: DStateAware<number | undefined> | number;
	protected _width?: DStateAware<number | undefined> | number;
	protected _offset?: DStateAware<number | undefined> | number;
	protected _align?: DStateAware<number | undefined> | number;
	protected _mask?: DStateAware<DBorderMask | undefined> | DBorderMask;
	protected _callback: Callback | undefined;

	constructor( theme: DThemeBase, options?: DBaseOptions<any>, callback?: Callback ) {
		this._theme = theme;
		this._callback = callback;
		if( options != null && options.outline != null ) {
			const outline = options.outline;
			this._color = outline.color;
			this._alpha = outline.alpha;
			this._width = outline.width;
			this._offset = outline.offset;
			this._align = outline.align;
			this._mask = ( utilIsString( outline.mask ) ? DBorderMask[ outline.mask ] : outline.mask );
		}
	}

	getTheme(): DThemeBase {
		return this._theme;
	}

	setTheme( theme: DThemeBase ): void {
		this._theme = theme;
	}

	getColor( state: DBaseState ): number | null {
		const color = this._color;
		if( color !== undefined ) {
			if( utilIsFunction( color ) ) {
				const result = color( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return color;
			}
		}
		return this._theme.getOutlineColor( state );
	}

	get color(): DStateAware<number | null | undefined> | number | null | undefined {
		return this._color;
	}

	set color( color: DStateAware<number | null | undefined> | number | null | undefined ) {
		if( this._color !== color ) {
			this._color = color;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}

	getAlpha( state: DBaseState ): number {
		const alpha = this._alpha;
		if( alpha !== undefined ) {
			if( utilIsFunction( alpha ) ) {
				const result = alpha( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return alpha;
			}
		}
		return this._theme.getOutlineAlpha( state );
	}

	get alpha(): DStateAware<number | undefined> | number | undefined {
		return this._alpha;
	}

	set alpha( alpha: DStateAware<number | undefined> | number | undefined ) {
		if( this._alpha !== alpha ) {
			this._alpha = alpha;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}

	getWidth( state: DBaseState ): number {
		const width = this._width;
		if( width !== undefined ) {
			if( utilIsFunction( width ) ) {
				const result = width( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return width;
			}
		}
		return this._theme.getOutlineWidth( state );
	}

	get width(): DStateAware<number | undefined> | number | undefined {
		return this._width;
	}

	set width( width: DStateAware<number | undefined> | number | undefined ) {
		if( this._width !== width ) {
			this._width = width;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}

	getOffset( state: DBaseState ): number {
		const offset = this._offset;
		if( offset !== undefined ) {
			if( utilIsFunction( offset ) ) {
				const result = offset( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return offset;
			}
		}
		return this._theme.getOutlineOffset( state );
	}

	get offset(): DStateAware<number | undefined> | number | undefined {
		return this._offset;
	}

	set offset( offset: DStateAware<number | undefined> | number | undefined ) {
		if( this._offset !== offset ) {
			this._offset = offset;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}

	getAlign( state: DBaseState ): number {
		const align = this._align;
		if( align !== undefined ) {
			if( utilIsFunction( align ) ) {
				const result = align( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return align;
			}
		}
		return this._theme.getOutlineAlign( state );
	}

	get align(): DStateAware<number | undefined> | number | undefined {
		return this._align;
	}

	set align( align: DStateAware<number | undefined> | number | undefined ) {
		if( this._align !== align ) {
			this._align = align;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}

	getMask( state: DBaseState ): number {
		const mask = this._mask;
		if( mask !== undefined ) {
			if( utilIsFunction( mask ) ) {
				const result = mask( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return mask;
			}
		}
		return this._theme.getOutlineMask( state );
	}

	get mask(): DStateAware<DBorderMask | undefined> | DBorderMask | undefined {
		return this._mask;
	}

	set mask( mask: DStateAware<DBorderMask | undefined> | DBorderMask | undefined ) {
		if( this._mask !== mask ) {
			this._mask = mask;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}
}

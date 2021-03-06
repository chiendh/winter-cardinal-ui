/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInput } from "../../d-input";
import { UtilHtmlElementCreator } from "../../util/util-html-element";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkHtmlElement } from "./d-theme-dark-html-element";

const editingValidator = (): string | null => {
	return null;
};

const editingUnformatter = <VALUE>( text: string ): VALUE => {
	return text as any;
};

const CREATOR_CLASSNAME = "d-theme-dark-input";
const CREATOR_CLASSNAME_ELEMENT = `${CREATOR_CLASSNAME}-element`;
const elementCreator = ( container: HTMLElement ): HTMLInputElement => {
	const found = container.getElementsByClassName( CREATOR_CLASSNAME_ELEMENT );
	if( 0 < found.length ) {
		return found[ 0 ] as HTMLInputElement;
	}
	const element = document.createElement( "input" );
	element.setAttribute( "spellcheck", "false" );
	element.setAttribute( "class", CREATOR_CLASSNAME_ELEMENT );
	container.appendChild( element );
	return element;
};

const divCreator = ( container: HTMLElement, classname: string ): HTMLDivElement => {
	const found = container.getElementsByClassName( classname );
	if( 0 < found.length ) {
		return found[ 0 ] as HTMLDivElement;
	}
	const result = document.createElement( "div" );
	result.setAttribute( "class", classname );
	container.appendChild( result );
	return result;
};

const CREATOR_CLASSNAME_CLIPPER = `${CREATOR_CLASSNAME}-clipper`;
const clipperCreator = ( container: HTMLElement ): HTMLDivElement => {
	return divCreator( container, CREATOR_CLASSNAME_CLIPPER );
};

const CREATOR_CLASSNAME_BEFORE = `${CREATOR_CLASSNAME}-before`;
const beforeCreator = ( container: HTMLElement ): HTMLDivElement => {
	return divCreator( container, CREATOR_CLASSNAME_BEFORE );
};

const CREATOR_CLASSNAME_AFTER = `${CREATOR_CLASSNAME}-after`;
const afterCreator = ( container: HTMLElement ): HTMLDivElement => {
	return divCreator( container, CREATOR_CLASSNAME_AFTER );
};

export class DThemeDarkInput<VALUE = unknown> extends DThemeDarkHtmlElement<VALUE, HTMLInputElement>
	implements DThemeInput<VALUE> {

	protected readonly BACKGROUND_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	protected readonly BACKGROUND_COLOR_HOVERED = UtilRgb.brighten( this.BACKGROUND_COLOR, 0.017 );

	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled || state.inReadOnly ) {
			return null;
		} else if( state.isFocused || state.isHovered ) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getOutlineColor( state: DBaseStateSet ): number | null {
		if( state.isInvalid ) {
			return DThemeDarkConstants.INVALID_COLOR;
		}
		return super.getOutlineColor( state );
	}

	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}

	getWidth(): DCoordinateSize {
		return 100;
	}

	getPlaceholder(): string {
		return "";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCursor( state: DBaseStateSet ): string {
		if( ! state.isActionable ) {
			return "";
		}
		return "text";
	}

	getEditingFormatter(): ( value: VALUE, caller: any ) => string {
		return this.getTextFormatter();
	}

	getEditingUnformatter(): ( text: string, caller: any ) => VALUE {
		return editingUnformatter;
	}

	getEditingValidator(): ( value: VALUE, caller: any ) => string | null {
		return editingValidator;
	}

	getElementCreator(): UtilHtmlElementCreator<HTMLInputElement> {
		return elementCreator;
	}

	getClipperCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return clipperCreator;
	}

	getBeforeCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return beforeCreator;
	}

	getAfterCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return afterCreator;
	}

	getSelect(): boolean {
		return true;
	}

	protected getElementStyleMargin( state: DBaseStateSet ): string {
		return "margin: 0.1em 0 0 0;";
	}
}

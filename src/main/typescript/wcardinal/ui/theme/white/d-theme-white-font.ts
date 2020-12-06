/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DFontStyle, DFontVariant, DFontWeight, DThemeFont } from "../../d-font";

export class DThemeWhiteFont implements DThemeFont {
	getFontFamilly() {
		return `ProximaNova,-apple-system,Meiryo,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`;
	}

	getFontSize(): number {
		return 14;
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeWhiteFont.getColor( state );
	}

	getFontWeight(): DFontWeight {
		return "normal";
	}

	getFontStyle(): DFontStyle {
		return "normal";
	}

	getFontVariant(): DFontVariant {
		return "normal";
	}

	getAlpha( state: DBaseStateSet ): number {
		return DThemeWhiteFont.getAlpha( state );
	}

	getLineHeight(): number {
		return 30;
	}

	static getColor( state: DBaseStateSet ): number {
		return 0x555555;
	}

	static getAlpha( state: DBaseStateSet ): number {
		if( state.inDisabled ) {
			return 0.5;
		} else {
			return 1.0;
		}
	}
}

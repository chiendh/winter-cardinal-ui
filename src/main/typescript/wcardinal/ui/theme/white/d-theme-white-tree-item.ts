/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTreeItem } from "../../d-tree-item";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteTreeItem extends DThemeWhiteLayoutHorizontal implements DThemeTreeItem {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isActive( state )  ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isHovered( state ) ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	getPaddingByLevel( level: number ): number {
		return level * 15;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition } from "../../d-coordinate";
import { DThemeWhiteButton } from "./d-theme-white-button";

export class DThemeWhiteSliderTrack extends DThemeWhiteButton implements DThemeWhiteSliderTrack {

	getBackgroundColor( state: DBaseState ): number | null {
		return 0xCCCCCC;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getColor( state: DBaseState ): number {
		return 0x5F5F5F;
	}

	getX(): DCoordinatePosition {
		return "CENTER";
	}

}

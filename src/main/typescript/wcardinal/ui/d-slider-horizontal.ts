/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderTrack } from "./d-slider-track";
import { DSliderTrackHorizontal } from "./d-slider-track-horizontal";

export interface DSliderHorizontalOptions<THEME extends DThemeSliderHorizontal> extends DSliderOptions<THEME> {

}

export interface DThemeSliderHorizontal extends DThemeSlider {

}

// this is space beetween min, range and max elements
const HORIZONTAL_PIXEL_BALANCE = 2;

export class DSliderHorizontal<
	THEME extends DThemeSliderHorizontal = DThemeSliderHorizontal,
	OPTIONS extends DSliderHorizontalOptions<THEME> = DSliderHorizontalOptions<THEME>
> extends DSlider<THEME, OPTIONS> {

	protected createTrack(): DSliderTrack {
		return new DSliderTrackHorizontal();
	}

	protected createTrackSelected(): DSliderTrack {
		return new DSliderTrackHorizontal();
	}

	protected updateCoordinates(): void {
		this._trackSelected.width = 0;

		// calculate y-offset to determine y-coordinate of slider bar
		this._yOffset = this._value.height + HORIZONTAL_PIXEL_BALANCE +
						this._thumb.height / 2 - this._track.height / 2;
		this._track.y = this._yOffset;
		this._trackSelected.y = this._yOffset;

		// this is offset beetween x-coordinate of slider value and slider button
		this._offset = this._value.width / 2 - this._thumb.width / 2;

		// Set Coordinate of value
		this._value.x = this._thumb.x - this._offset;
		this._value.y = 0;

		// Calculate coordinate of max and min label
		this._min.x = 0 - this._min.width;
		this._min.y = this.yOffset - (this._min.height / 2 - this.track.height / 2);
		this._max.x = this.width + HORIZONTAL_PIXEL_BALANCE;
		this._max.y = this.yOffset - (this._min.height / 2 - this.track.height / 2);

		// Calculate coordinate of Thumb
		this._thumb.x = 0;
		this._thumb.y = this._value.height + HORIZONTAL_PIXEL_BALANCE;
	}

	protected onPick( global: Point ) {
		const point = new Point(0, 0);
		this.toLocal( global, undefined, point );
		const x = Math.max( 0, Math.min( this._track.width, point.x ) );
		if ( x < this._thumb.width / 2 ) {
			this._thumb.x = 0;
		} else if (x > (this._track.width - this._thumb.width / 2)) {
			this._thumb.x = this._track.width - this._thumb.width;
		} else {
			this._thumb.x = x - this._thumb.width / 2;
		}
		this._ratioValue = x / this._track.width;
		this._trackSelected.width = this._thumb.x;
		this._value.x = this._thumb.x - this._offset;
		this.updateValue(this._min.value, this._max.value);
	}

	protected updateThumb(min: number, max: number, value: number) {
		this._ratioValue = (value - min) / (max - min);
		const x =  this._ratioValue * this._track.width;
		if (x > (this._track.width - this._thumb.width / 2)) {
			this._thumb.x = this._track.width - this._thumb.width;
		} else {
			this._thumb.x = x;
		}
		this._trackSelected.width = this._thumb.x;
		this._value.x = this._thumb.x - this._offset;
		this._value.value = value;
		this._value.text = String(value);
	}

	protected getType(): string {

		return "DSliderHorizontal";

	}

}
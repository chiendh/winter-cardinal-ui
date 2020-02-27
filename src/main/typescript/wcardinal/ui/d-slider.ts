/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderLabel, DSliderLabelOptions } from "./d-slider-label";
import { DSliderThumb, DSliderThumbOptions } from "./d-slider-thumb";
import { DSliderTrack, DSliderTrackOptions } from "./d-slider-track";
import { DSliderValue, DSliderValueOptions } from "./d-slider-value";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {
	min?: DSliderLabelOptions;
	max?: DSliderLabelOptions;
	value?: DSliderValueOptions;
	track?: DSliderTrackOptions;
	thumb?: DSliderThumbOptions;
}

export interface DThemeSlider extends DThemeBase {

}

export abstract class DSlider<
	THEME extends DThemeSlider = DThemeSlider,
	OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _track!: DSliderTrack;
	protected _thumb!: DSliderThumb;
	protected _trackSelected!: DSliderTrack;
	protected _value!: DSliderValue;
	protected _roundNumber!: number;
	protected _offset!: number;
	protected _yOffset!: number;
	protected _ratioValue!: number;
	protected _min!: DSliderLabel;
	protected _max!: DSliderLabel;
	protected _onThumbMoveBound!: ( e: InteractionEvent ) => void;
	protected _onThumbUpBound!: ( e: InteractionEvent ) => void;
	protected _onTrackUpBound!: ( e: InteractionEvent ) => void;
	protected _onTrackSelectedUpBound!: ( e: InteractionEvent ) => void;
	

	protected init( options?: OPTIONS ) {
		super.init( options );
		this.prepareValues( options );
		this.adjustSize( options );
		this.updateCoordinates();
		this.appendChildToView();
		this.initListeners();
		this.updateThumb();
	}

	protected prepareValues( options?: OPTIONS ): void {
		this._ratioValue = 0;
		this._value = this.newValue( options );
		this._track = this.newTrack( options );
		this._min = this.newMin( options );
		this._max = this.newMax( options );
		this._thumb = this.newThumb();
		this._min.text = `${this._min.value}`;
		this._max.text = `${this._max.value}`;
		this._value.text = this._value.value;
		this._trackSelected = this.newTrackSelected( options );
		this._trackSelected.setActive( true );
		this._value.visible = false;
	}

	protected appendChildToView(): void {
		this.addChild( this._track );
		this.addChild( this._trackSelected );
		this.addChild( this._thumb );
		this.addChild( this._min );
		this.addChild( this._max );
		this.addChild( this._value );
	}

	protected initListeners(): void {
		this._track.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this._value.visible = true;
			this.onTrackDown( e.data.global );
		});

		this._trackSelected.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this._value.visible = true;
			this.onTrackSelectedDown( e.data.global );
		});

		this._onTrackUpBound = ( e: InteractionEvent ): void => {
			this.onTrackUpBound( e );
			this._value.visible = false;
		};

		this._onTrackSelectedUpBound = ( e: InteractionEvent ): void => {
			this.onTrackSelectedUpBound( e );
			this._value.visible = false;
		};

		this._thumb.on( UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this._value.visible = true;
			this.onThumbDown( e );
		});

		this._onThumbMoveBound = ( e: InteractionEvent ): void => {
			this.onThumbMove( e );
		};

		this._onThumbUpBound = ( e: InteractionEvent ): void => {
			this.onThumbUp( e );
			this._value.visible = false;
		};
	}

	protected newValue( options?: OPTIONS ): DSliderValue {
		return new DSliderValue( options && options.value );
	}

	protected newMax(options?: OPTIONS): DSliderLabel {
		const max = options && options.max;
		return new DSliderLabel({
			value: ( max && max.value ) ?? 1
		});
	}

	protected newMin( options?: OPTIONS ): DSliderLabel {
		const min = options && options.min;
		return new DSliderLabel({
			value: ( min && min.value ) ?? 0
		});
	}

	protected newThumb( options?: OPTIONS ): DSliderThumb {
		return new DSliderThumb( options && options.thumb );
	}

	protected abstract newTrack( options?: OPTIONS ): DSliderTrack;
	protected abstract newTrackSelected( options?: OPTIONS ): DSliderTrack;
	protected abstract updateCoordinates(): void;
	protected abstract onPick( global: Point ): void;
	protected abstract updateThumb(): void;
	protected abstract updateChildren( thumbCoordinate: number ): void;
	protected abstract adjustSize( options?: OPTIONS ): void;

	protected onTrackDown( global: Point ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onTrackUpBound );
		}
		this.onPick( global );
	}

	protected onTrackSelectedDown( global: Point ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onTrackSelectedUpBound );
		}
		this.onPick( global );
	}

	protected onTrackUpBound( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onTrackUpBound );
		}
	}

	protected onTrackSelectedUpBound( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onTrackSelectedUpBound );
		}
	}

	protected onThumbMove( e: InteractionEvent ): void {
		this.onPick( e.data.global );
	}

	protected onThumbDown( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onThumbMoveBound );
			stage.on( UtilPointerEvent.up, this._onThumbUpBound );
		}
	}

	protected onThumbUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onThumbMoveBound );
			stage.off( UtilPointerEvent.up, this._onThumbUpBound );
		}
	}

	protected updateValue(): void {
		const min = this._min.value;
		const max = this._max.value;
		const value = this._value;
		value.value = value.rounder( min + this._ratioValue * ( max - min ) );
		value.text = value.value;
	}

	onResize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		super.onResize( newWidth, newHeight, oldWidth, oldHeight );
		// Adjust children's size
		this.adjustSize();
		// Update thumb and children
		this.updateThumb();
    }

	/**
	 * Gets current value of slider
	 */
	get value(): number {
		return this._value.value;
	}

	/**
	 * Sets value for slider
	 * - New value will be applied
	 * - UI components will be changed arcording to new value
	 */
	set value( value: number ) {
		// Value must be in range [min, max]. Do nothing if not.
		if (this._min.value <= value && value <= this._max.value) {
			value = Math.max( this._min.value, Math.min( this._max.value, value ) );
			// Adjust if value is new
			if( this._value.value !== value ) {
				this._value.value = value;
				this.updateThumb();
			}
		}
	}

	/**
	 * Gets min value of slider
	 */
	get min(): number {
		return this._min.value;
	}

	/**
	 * Sets min value for slider
	 * - New min value will be applied
	 * - UI components will be changed arcording to new value
	 */
	set min( min: number ) {
		// Do nothing if min is smaller than value
		if (min <= this._value.value) {
			const minComponent = this._min;
			min = Math.min( this._max.value, min );
			// If min is new value
			if( minComponent.value !== min ) {
				const valueComponent = this._value;
				minComponent.text = minComponent.value = min;
				// Adjust current value if it's out of range
				if( valueComponent.value < min ) {
					valueComponent.value = min;
				}
				// Update layout
				this.updateThumb();
			}
		}
	}

	/**
	 * Gets max value of slider
	 */
	get max(): number {
		return this._max.value;
	}

	/**
	 * Sets max value for slider
	 * - New max value will be applied
	 * - UI components will be changed arcording to new value
	 */
	set max( max: number ) {
		// Do nothing if max is larger than value
		if (max >= this._value.value) {
			const maxComponent = this._max;
			max = Math.max( this._min.value, max );
			// If max is new value
			if( maxComponent.value !== max ) {
				const valueComponent = this._value;
				maxComponent.text = maxComponent.value = max;
				// Adjust current value if it's out of range
				if( max < valueComponent.value ) {
					valueComponent.value = max;
				}
				// Update layout
				this.updateThumb();
			}
		}
	}

	protected getType(): string {
		return "DSlider";
	}
}

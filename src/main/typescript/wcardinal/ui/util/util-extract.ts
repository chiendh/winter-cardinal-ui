/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "../d-base";
import { UtilExtractor } from "./util-extractor";
import { UtilExtractorPixels } from "./util-extractor-pixels";
import { UtilFileDownloader } from "./util-file-downloader";
import { utilIsNumber } from "./util-is-number";

export interface UtilExtractTextureOptions {
	target: DBase;
	resolution?: number | {
		size: number;
	};
	transform?: {
		update?: boolean;
	};
	clear?: boolean;
}

export interface UtilExtractPixelsOptions extends UtilExtractTextureOptions {

}

export interface UtilExtractCanvasOptions extends UtilExtractPixelsOptions {
	scale?: number | {
		size: number;
	};
	alpha?: {
		premultiplied?: {
			ignore?: boolean;
		}
	};
}

export interface UtilExtractBase64Options extends UtilExtractCanvasOptions {
	format?: string;
	quality?: number;
}

export interface UtilExtractFileOptions extends UtilExtractBase64Options {
	filename: string;
}

const toSkipUpdateTransform = ( options: UtilExtractTextureOptions ): boolean | undefined => {
	return options.transform && options.transform.update;
};

const toResolution = ( options: UtilExtractTextureOptions ): number => {
	const target = options.target;
	return ( options.resolution != null ?
		( utilIsNumber( options.resolution ) ?
			options.resolution :
			Math.min( 1, options.resolution.size / Math.max( target.width, target.height ) )
		) : PIXI.settings.RESOLUTION
	);
};

const toIgnorePremultipliedAlpha = ( options: UtilExtractCanvasOptions ): boolean | undefined => {
	return ( options.alpha && options.alpha.premultiplied && options.alpha.premultiplied.ignore );
};

const toScale = ( pixels: UtilExtractorPixels, options: UtilExtractCanvasOptions ): number | undefined => {
	if( options.scale != null ) {
		if( utilIsNumber( options.scale ) ) {
			return options.scale;
		} else {
			const size = options.scale.size;
			return Math.min( 1, size / pixels.width, size / pixels.height );
		}
	}
};

export class UtilExtract {
	static texture( options: UtilExtractTextureOptions ): PIXI.RenderTexture {
		const target = options.target;
		const resolution = toResolution( options );
		const skipUpdateTransform = toSkipUpdateTransform( options );
		return UtilExtractor.toTexture( target, resolution, options.clear, skipUpdateTransform );
	}

	static pixels( options: UtilExtractPixelsOptions ): UtilExtractorPixels {
		return UtilExtractor.toPixels( this.texture( options ) );
	}

	static canvas( options: UtilExtractCanvasOptions ): HTMLCanvasElement {
		const pixels = this.pixels( options );
		const ignorePremutipliedAlpha = toIgnorePremultipliedAlpha( options );
		const scale = toScale( pixels, options );
		return UtilExtractor.toCanvas( pixels, scale, ignorePremutipliedAlpha );
	}

	static base64( options: UtilExtractBase64Options ): string {
		return UtilExtractor.toBase64( this.canvas( options ), options.format, options.quality );
	}

	static file( options: UtilExtractFileOptions ): void {
		UtilFileDownloader.downloadUrl( options.filename, this.base64( options ) );
	}
}
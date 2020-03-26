/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum DBaseState {
	NONE		= 0,
	HOVERED		= 1 << 0,
	ACTIVE		= 1 << 1,
	ACTIVE_IN	= 1 << 2,
	FOCUSED		= 1 << 3,
	FOCUSED_IN	= 1 << 4,
	UNFOCUSABLE	= 1 << 5,
	FOCUS_ROOT	= 1 << 6,
	READ_ONLY	= 1 << 7,
	DISABLED	= 1 << 8,
	DRAGGING	= 1 << 9,
	PRESSED		= 1 << 10,
	INVALID		= 1 << 11,
	SUCCEEDED	= 1 << 12,
	FAILED		= 1 << 13,

	CUSTOM		= 1 << 20
}

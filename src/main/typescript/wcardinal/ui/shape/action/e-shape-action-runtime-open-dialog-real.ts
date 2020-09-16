/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputReal } from "../../d-dialog-input-real";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";

export class EShapeActionRuntimeOpenDialogReal extends EShapeActionRuntimeOpenDialog<number> {
	protected static DIALOG?: DDialogInputReal;

	protected open( target: string ): Promise<number> {
		let dialog = EShapeActionRuntimeOpenDialogReal.DIALOG;
		if( dialog == null ) {
			dialog = new DDialogInputReal({
				label: target
			});
			EShapeActionRuntimeOpenDialogReal.DIALOG = dialog;
		} else {
			const label = dialog.label;
			if( label ) {
				label.text = target;
			}
		}
		return dialog.open();
	}
}

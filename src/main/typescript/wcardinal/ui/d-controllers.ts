/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DControllerCommand } from "./d-controller-command";
import { DControllerDefaultCommand } from "./d-controller-default-command";
import { DControllerDefaultFocus } from "./d-controller-default-focus";
import { DControllerDocument } from "./d-controller-document";
import { DControllerFocus } from "./d-controller-focus";
import { DControllerKeyboard } from "./d-controller-keyboard";
import { DDocument } from "./d-document";

export class DControllers {
	protected static FOCUS: DControllerFocus | null;
	protected static KEYBOARD: DControllerKeyboard | null;
	protected static COMMAND: DControllerCommand | null;
	protected static DOCUMENT: DControllerDocument<any> | null;

	// Focus
	static getFocusController(): DControllerFocus {
		if( this.FOCUS == null ) {
			this.FOCUS = new DControllerDefaultFocus();
		}
		return this.FOCUS;
	}

	static setFocusController( instance: DControllerFocus ): DControllerFocus | null {
		const result = this.FOCUS;
		this.FOCUS = instance;
		return result;
	}

	// Keyboard
	static getKeyboardController(): DControllerKeyboard {
		if( this.KEYBOARD == null ) {
			this.KEYBOARD = new DControllerKeyboard();
		}
		return this.KEYBOARD;
	}

	static setKeyboardController( instance: DControllerKeyboard ): DControllerKeyboard | null {
		const result = this.KEYBOARD;
		this.KEYBOARD = instance;
		return result;
	}

	// Command
	static getCommandController(): DControllerCommand {
		if( this.COMMAND == null ) {
			this.COMMAND = new DControllerDefaultCommand();
		}
		return this.COMMAND;
	}

	static setCommandController( instance: DControllerCommand ): DControllerCommand | null {
		const result = this.COMMAND;
		this.COMMAND = instance;
		return result;
	}

	// Document
	static getDocumentController<DOCUMENT extends DDocument>(): DControllerDocument<DOCUMENT> {
		if( this.DOCUMENT == null ) {
			throw new Error( "Not supported" );
		}
		return this.DOCUMENT;
	}

	static setDocumentController<DOCUMENT extends DDocument>(
		instance: DControllerDocument<DOCUMENT>
	): DControllerDocument<DOCUMENT> | null {
		const result = this.DOCUMENT;
		this.DOCUMENT = instance;
		return result;
	}
}
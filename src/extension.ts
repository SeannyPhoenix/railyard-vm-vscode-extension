import {commands, type ExtensionContext}  from 'vscode';
import { getConfig } from './config';

export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "railyard-vm" is now active!');

	context.subscriptions.push(commands.registerCommand('railyard-vm.getConfig', getConfig));
}

export function deactivate() {}

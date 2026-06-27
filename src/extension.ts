import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('nova.run', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const fileName = editor.document.fileName;
            exec('nova_lang ' + fileName, (err, stdout) => {
                vscode.window.showInformationMessage('Nova Output: ' + stdout);
            });
        }
    });
    context.subscriptions.push(disposable);
}

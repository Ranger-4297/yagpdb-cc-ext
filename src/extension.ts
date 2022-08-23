import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "none" is now active!');

    let disposable = vscode.commands.registerCommand('yagpdbcc.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from YAGPDB!');
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
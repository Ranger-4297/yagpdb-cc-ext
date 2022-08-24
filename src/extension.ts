import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let CCW = vscode.window.createOutputChannel("YAGPDB");
    CCW.show();
    CCW.appendLine('YAGPDB cc ext has loaded, information will be output here')
    CCW.appendLine('Language configured is ' + vscode.workspace.getConfiguration('yagpdbcc').get('syntaxHighlighting')!);

    let disposable = vscode.commands.registerCommand('yagpdbcc.var', () => {
        console.log(vscode.workspace.getConfiguration('yagpdbcc').get('syntaxHighlighting'));
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
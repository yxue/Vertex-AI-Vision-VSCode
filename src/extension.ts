// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Operation } from './google/longrunning/operations_pb';

import { TreeItem, TreeViewDataProvider } from './treeViewDataProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vertex-ai-vision-vscode" is now active!');

	var config = vscode.workspace.getConfiguration();
	var project = config.get('visionai.project');
	if (project === '') {
		vscode.window.showErrorMessage('GCP project is not set.');
	} else {
		const treeViewDataProvider = new TreeViewDataProvider('projects/' + project + '/locations/' + config.get('visionai.location'));
		vscode.window.registerTreeDataProvider('vertexAIVision', treeViewDataProvider);

		vscode.commands.registerCommand('vertex-ai-vision-vscode.describe', async (item: TreeItem) => {
			var doc = await vscode.workspace.openTextDocument({
				content: item.name,
				language: "json",
			});
			await vscode.window.showTextDocument(doc, { preview: true, preserveFocus: false });
			vscode.window.showInformationMessage('Open the description of ' + item.type + ' ' + item.label);
		});

		vscode.commands.registerCommand('vertex-ai-vision-vscode.delete', async (item: TreeItem) => {
			var op: Operation;
			if (item.type === 'stream') {
				op = await treeViewDataProvider.deleteStream(item.name);
			} else {
				op = await treeViewDataProvider.deleteAnlysis(item.name);
			}
			if (op.hasError()) {
				vscode.window.showErrorMessage('Failed to delete ' + item.type + '"' + item.label + '". Error: \n' + op.getError());
			} else {
				vscode.window.showInformationMessage('Deleted ' + item.type + ' "' + item.label + '" successfully!');
			}
		});

		vscode.commands.registerCommand('vertex-ai-vision-vscode.newstream', async () => {
			var doc = await vscode.workspace.openTextDocument({
				content: `{
  "name": "projects/${project}/locations/${config.get('visionai.location')}/clusters/CLUSTER_ID/streams/STREAM_ID",
  "enableHlsPlayback": false,
  "mediaWarehouseAsset": "",
  "displayName": ""
}`,
				language: 'json',
			});
			await vscode.window.showTextDocument(doc, { preview: true, preserveFocus: false });
			vscode.window.showInformationMessage("A new stream is created, please run Submit to submit the stream.");
		});

		vscode.commands.registerCommand('vertex-ai-vision-vscode.submitstream', async () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const text = editor.document.getText();
				const stream = JSON.parse(text);
				var op = await treeViewDataProvider.createStream(stream);
				if (op.hasError()) {
					vscode.window.showErrorMessage('Failed to create stream ${stream.name}. Error: ${op.getError()}');
				} else {
					vscode.window.showInformationMessage('Created stream ${stream.name} successfully!');
				}
			}
		});
	}

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vertex-ai-vision-vscode.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Vertex AI Vision VSCode!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }

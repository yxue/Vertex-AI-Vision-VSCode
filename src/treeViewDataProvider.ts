import * as vscode from 'vscode';
import { VisionAIClient } from './client';
import { Operation } from './google/longrunning/operations_pb';
import { Stream } from './resources';

export class TreeViewDataProvider implements vscode.TreeDataProvider<TreeItem>{
    constructor(public readonly parent: string) { }
    getTreeItem(element: TreeItem): Thenable<TreeItem> {
        return this.updateChildren(element);
    }

    getChildren(element?: TreeItem): vscode.ProviderResult<TreeItem[]> {
        if (!element) {
            return Promise.resolve([new TreeItem('clusters', this.parent, 'clusters', [])]);
        }
        return Promise.resolve(element.children);
    }

    async updateChildren(element: TreeItem): Promise<TreeItem> {
        element.children = new Array();
        switch (element.type) {
            case 'clusters':
                var clusters = await this.listClusters(element.name);
                element.children.push(...clusters);
                break;
            case 'cluster':
                var streamNode = new TreeItem('streams', element.name, 'streams', []);
                var analysesNode = new TreeItem('analyses', element.name, 'analyses', []);
                element.children = [streamNode, analysesNode];
                break;
            case 'streams':
                var streams = await this.listStreams(element.name);
                element.children.push(...streams);
                break;
            case 'analyses':
                var analyses = await this.listAnalyses(element.name);
                element.children.push(...analyses);
                break;
            case 'stream':
                break;
        }
        return element;
    }

    async listClusters(parent: string): Promise<TreeItem[]> {
        await this.client.initialize();
        var clusters = await this.client.listClusters(parent);
        return clusters.sort((lhs, rhs) => lhs.name < rhs.name ? -1 : 1).map(c => new TreeItem(c.label, c.name, 'cluster', []));
    }

    async listStreams(parent: string): Promise<TreeItem[]> {
        await this.client.initialize();
        var streams = await this.client.listStreams(parent);
        return streams.sort((lhs, rhs) => lhs.name < rhs.name ? -1 : 1).map(s => new TreeItem(s.label, s.name, 'stream'));
    }

    async listAnalyses(parent: string): Promise<TreeItem[]> {
        await this.client.initialize();
        var analyses = await this.client.listAnalyses(parent);
        return analyses.sort((lhs, rhs) => lhs.name < rhs.name ? -1 : 1).map(a => new TreeItem(a.label, a.name, 'analysis'));
    }

    async deleteStream(name: string): Promise<Operation> {
        await this.client.initialize();
        return this.client.deleteStream(name);
    }

    async deleteAnlysis(name: string): Promise<Operation> {
        await this.client.initialize();
        return this.client.deleteAnalysis(name);
    }

    async createStream(stream: any): Promise<Operation> {
        await this.client.initialize();
        return this.client.createStream(new Stream(stream.name, stream.displayName, stream.mediaWarehouseAsset, stream.enableHlsPlayback));
    }

    client = new VisionAIClient('visionai.googleapis.com');
}

export class TreeItem extends vscode.TreeItem {
    children: TreeItem[] | undefined;

    constructor(
        public readonly label: string, public readonly name: string, public readonly type: string, children?: TreeItem[]
    ) {
        super(label, children ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None);
        this.tooltip = this.label;
        this.name = name;
        this.type = type;
        this.children = children;
        this.contextValue = type;
    }
}
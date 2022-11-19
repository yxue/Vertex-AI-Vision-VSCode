export class Stream {
    constructor(public readonly name: string, public readonly displayName: string, public readonly mwhAsset: string, public readonly enableHLS: boolean) {
        this.name = name;
        this.displayName = displayName;
        this.mwhAsset = mwhAsset;
        this.enableHLS = enableHLS;
        var ids = name.split('/');
        this.label = ids[ids.length - 1];
    }

    public readonly label: string;
}

export class Analysis {
    constructor(public readonly name: string, public readonly definition: string, public readonly input: Map<string, string>, public readonly output: Map<string, string>) {
        this.name = name;
        this.definition = definition;
        this.input = input;
        this.output = output;
        var ids = name.split('/');
        this.label = ids[ids.length - 1];
    }
    public readonly label: string;
}

export class Cluster {
    constructor(public readonly name: string, public readonly endpoint: string) {
        this.name = name;
        this.endpoint = endpoint;
        var ids = name.split('/');
        this.label = ids[ids.length - 1];
    }
    public readonly label: string;
}

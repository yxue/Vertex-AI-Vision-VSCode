// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/lva.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OperatorDefinition extends jspb.Message { 
    getOperator(): string;
    setOperator(value: string): OperatorDefinition;
    clearInputArgsList(): void;
    getInputArgsList(): Array<OperatorDefinition.ArgumentDefinition>;
    setInputArgsList(value: Array<OperatorDefinition.ArgumentDefinition>): OperatorDefinition;
    addInputArgs(value?: OperatorDefinition.ArgumentDefinition, index?: number): OperatorDefinition.ArgumentDefinition;
    clearOutputArgsList(): void;
    getOutputArgsList(): Array<OperatorDefinition.ArgumentDefinition>;
    setOutputArgsList(value: Array<OperatorDefinition.ArgumentDefinition>): OperatorDefinition;
    addOutputArgs(value?: OperatorDefinition.ArgumentDefinition, index?: number): OperatorDefinition.ArgumentDefinition;
    clearAttributesList(): void;
    getAttributesList(): Array<OperatorDefinition.AttributeDefinition>;
    setAttributesList(value: Array<OperatorDefinition.AttributeDefinition>): OperatorDefinition;
    addAttributes(value?: OperatorDefinition.AttributeDefinition, index?: number): OperatorDefinition.AttributeDefinition;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): ResourceSpecification | undefined;
    setResources(value?: ResourceSpecification): OperatorDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperatorDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: OperatorDefinition): OperatorDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperatorDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperatorDefinition;
    static deserializeBinaryFromReader(message: OperatorDefinition, reader: jspb.BinaryReader): OperatorDefinition;
}

export namespace OperatorDefinition {
    export type AsObject = {
        operator: string,
        inputArgsList: Array<OperatorDefinition.ArgumentDefinition.AsObject>,
        outputArgsList: Array<OperatorDefinition.ArgumentDefinition.AsObject>,
        attributesList: Array<OperatorDefinition.AttributeDefinition.AsObject>,
        resources?: ResourceSpecification.AsObject,
    }


    export class ArgumentDefinition extends jspb.Message { 
        getArgument(): string;
        setArgument(value: string): ArgumentDefinition;
        getType(): string;
        setType(value: string): ArgumentDefinition;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ArgumentDefinition.AsObject;
        static toObject(includeInstance: boolean, msg: ArgumentDefinition): ArgumentDefinition.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ArgumentDefinition, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ArgumentDefinition;
        static deserializeBinaryFromReader(message: ArgumentDefinition, reader: jspb.BinaryReader): ArgumentDefinition;
    }

    export namespace ArgumentDefinition {
        export type AsObject = {
            argument: string,
            type: string,
        }
    }

    export class AttributeDefinition extends jspb.Message { 
        getAttribute(): string;
        setAttribute(value: string): AttributeDefinition;
        getType(): string;
        setType(value: string): AttributeDefinition;

        hasDefaultValue(): boolean;
        clearDefaultValue(): void;
        getDefaultValue(): AttributeValue | undefined;
        setDefaultValue(value?: AttributeValue): AttributeDefinition;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AttributeDefinition.AsObject;
        static toObject(includeInstance: boolean, msg: AttributeDefinition): AttributeDefinition.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AttributeDefinition, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AttributeDefinition;
        static deserializeBinaryFromReader(message: AttributeDefinition, reader: jspb.BinaryReader): AttributeDefinition;
    }

    export namespace AttributeDefinition {
        export type AsObject = {
            attribute: string,
            type: string,
            defaultValue?: AttributeValue.AsObject,
        }
    }

}

export class ResourceSpecification extends jspb.Message { 
    getCpu(): string;
    setCpu(value: string): ResourceSpecification;
    getMemory(): string;
    setMemory(value: string): ResourceSpecification;
    getGpus(): number;
    setGpus(value: number): ResourceSpecification;
    getLatencyBudgetMs(): number;
    setLatencyBudgetMs(value: number): ResourceSpecification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceSpecification.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceSpecification): ResourceSpecification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceSpecification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceSpecification;
    static deserializeBinaryFromReader(message: ResourceSpecification, reader: jspb.BinaryReader): ResourceSpecification;
}

export namespace ResourceSpecification {
    export type AsObject = {
        cpu: string,
        memory: string,
        gpus: number,
        latencyBudgetMs: number,
    }
}

export class AttributeValue extends jspb.Message { 

    hasI(): boolean;
    clearI(): void;
    getI(): number;
    setI(value: number): AttributeValue;

    hasF(): boolean;
    clearF(): void;
    getF(): number;
    setF(value: number): AttributeValue;

    hasB(): boolean;
    clearB(): void;
    getB(): boolean;
    setB(value: boolean): AttributeValue;

    hasS(): boolean;
    clearS(): void;
    getS(): Uint8Array | string;
    getS_asU8(): Uint8Array;
    getS_asB64(): string;
    setS(value: Uint8Array | string): AttributeValue;

    getValueCase(): AttributeValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttributeValue.AsObject;
    static toObject(includeInstance: boolean, msg: AttributeValue): AttributeValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttributeValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttributeValue;
    static deserializeBinaryFromReader(message: AttributeValue, reader: jspb.BinaryReader): AttributeValue;
}

export namespace AttributeValue {
    export type AsObject = {
        i: number,
        f: number,
        b: boolean,
        s: Uint8Array | string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        I = 1,
        F = 2,
        B = 3,
        S = 4,
    }

}

export class AnalyzerDefinition extends jspb.Message { 
    getAnalyzer(): string;
    setAnalyzer(value: string): AnalyzerDefinition;
    getOperator(): string;
    setOperator(value: string): AnalyzerDefinition;
    clearInputsList(): void;
    getInputsList(): Array<AnalyzerDefinition.StreamInput>;
    setInputsList(value: Array<AnalyzerDefinition.StreamInput>): AnalyzerDefinition;
    addInputs(value?: AnalyzerDefinition.StreamInput, index?: number): AnalyzerDefinition.StreamInput;

    getAttrsMap(): jspb.Map<string, AttributeValue>;
    clearAttrsMap(): void;

    hasDebugOptions(): boolean;
    clearDebugOptions(): void;
    getDebugOptions(): AnalyzerDefinition.DebugOptions | undefined;
    setDebugOptions(value?: AnalyzerDefinition.DebugOptions): AnalyzerDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnalyzerDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: AnalyzerDefinition): AnalyzerDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnalyzerDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnalyzerDefinition;
    static deserializeBinaryFromReader(message: AnalyzerDefinition, reader: jspb.BinaryReader): AnalyzerDefinition;
}

export namespace AnalyzerDefinition {
    export type AsObject = {
        analyzer: string,
        operator: string,
        inputsList: Array<AnalyzerDefinition.StreamInput.AsObject>,

        attrsMap: Array<[string, AttributeValue.AsObject]>,
        debugOptions?: AnalyzerDefinition.DebugOptions.AsObject,
    }


    export class StreamInput extends jspb.Message { 
        getInput(): string;
        setInput(value: string): StreamInput;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamInput.AsObject;
        static toObject(includeInstance: boolean, msg: StreamInput): StreamInput.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamInput, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamInput;
        static deserializeBinaryFromReader(message: StreamInput, reader: jspb.BinaryReader): StreamInput;
    }

    export namespace StreamInput {
        export type AsObject = {
            input: string,
        }
    }

    export class DebugOptions extends jspb.Message { 

        getEnvironmentVariablesMap(): jspb.Map<string, string>;
        clearEnvironmentVariablesMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DebugOptions.AsObject;
        static toObject(includeInstance: boolean, msg: DebugOptions): DebugOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DebugOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DebugOptions;
        static deserializeBinaryFromReader(message: DebugOptions, reader: jspb.BinaryReader): DebugOptions;
    }

    export namespace DebugOptions {
        export type AsObject = {

            environmentVariablesMap: Array<[string, string]>,
        }
    }

}

export class AnalysisDefinition extends jspb.Message { 
    clearAnalyzersList(): void;
    getAnalyzersList(): Array<AnalyzerDefinition>;
    setAnalyzersList(value: Array<AnalyzerDefinition>): AnalysisDefinition;
    addAnalyzers(value?: AnalyzerDefinition, index?: number): AnalyzerDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnalysisDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: AnalysisDefinition): AnalysisDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnalysisDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnalysisDefinition;
    static deserializeBinaryFromReader(message: AnalysisDefinition, reader: jspb.BinaryReader): AnalysisDefinition;
}

export namespace AnalysisDefinition {
    export type AsObject = {
        analyzersList: Array<AnalyzerDefinition.AsObject>,
    }
}

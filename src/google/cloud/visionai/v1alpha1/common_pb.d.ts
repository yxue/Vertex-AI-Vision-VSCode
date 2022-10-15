// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Cluster extends jspb.Message {
    getName(): string;
    setName(value: string): Cluster;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;
    getDataplaneServiceEndpoint(): string;
    setDataplaneServiceEndpoint(value: string): Cluster;
    getState(): Cluster.State;
    setState(value: Cluster.State): Cluster;
    getPscTarget(): string;
    setPscTarget(value: string): Cluster;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cluster.AsObject;
    static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cluster;
    static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
    export type AsObject = {
        name: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,

        annotationsMap: Array<[string, string]>,
        dataplaneServiceEndpoint: string,
        state: Cluster.State,
        pscTarget: string,
    }

    export enum State {
        STATE_UNSPECIFIED = 0,
        PROVISIONING = 1,
        RUNNING = 2,
        STOPPING = 3,
        ERROR = 4,
    }

}

export class OperationMetadata extends jspb.Message {

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
    getTarget(): string;
    setTarget(value: string): OperationMetadata;
    getVerb(): string;
    setVerb(value: string): OperationMetadata;
    getStatusMessage(): string;
    setStatusMessage(value: string): OperationMetadata;
    getRequestedCancellation(): boolean;
    setRequestedCancellation(value: boolean): OperationMetadata;
    getApiVersion(): string;
    setApiVersion(value: string): OperationMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationMetadata;
    static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
    export type AsObject = {
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        target: string,
        verb: string,
        statusMessage: string,
        requestedCancellation: boolean,
        apiVersion: string,
    }
}

export class GcsSource extends jspb.Message {
    clearUrisList(): void;
    getUrisList(): Array<string>;
    setUrisList(value: Array<string>): GcsSource;
    addUris(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GcsSource.AsObject;
    static toObject(includeInstance: boolean, msg: GcsSource): GcsSource.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GcsSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GcsSource;
    static deserializeBinaryFromReader(message: GcsSource, reader: jspb.BinaryReader): GcsSource;
}

export namespace GcsSource {
    export type AsObject = {
        urisList: Array<string>,
    }
}

export class GcsDestination extends jspb.Message {
    getOutputUriPrefix(): string;
    setOutputUriPrefix(value: string): GcsDestination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GcsDestination.AsObject;
    static toObject(includeInstance: boolean, msg: GcsDestination): GcsDestination.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GcsDestination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GcsDestination;
    static deserializeBinaryFromReader(message: GcsDestination, reader: jspb.BinaryReader): GcsDestination;
}

export namespace GcsDestination {
    export type AsObject = {
        outputUriPrefix: string,
    }
}

// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/lva_resources.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_cloud_visionai_v1alpha1_lva_pb from "../../../../google/cloud/visionai/v1alpha1/lva_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Operator extends jspb.Message { 
    getName(): string;
    setName(value: string): Operator;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Operator;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Operator;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasOperatorDefinition(): boolean;
    clearOperatorDefinition(): void;
    getOperatorDefinition(): google_cloud_visionai_v1alpha1_lva_pb.OperatorDefinition | undefined;
    setOperatorDefinition(value?: google_cloud_visionai_v1alpha1_lva_pb.OperatorDefinition): Operator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operator.AsObject;
    static toObject(includeInstance: boolean, msg: Operator): Operator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Operator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Operator;
    static deserializeBinaryFromReader(message: Operator, reader: jspb.BinaryReader): Operator;
}

export namespace Operator {
    export type AsObject = {
        name: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,
        operatorDefinition?: google_cloud_visionai_v1alpha1_lva_pb.OperatorDefinition.AsObject,
    }
}

export class Analysis extends jspb.Message { 
    getName(): string;
    setName(value: string): Analysis;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Analysis;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Analysis;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasAnalysisDefinition(): boolean;
    clearAnalysisDefinition(): void;
    getAnalysisDefinition(): google_cloud_visionai_v1alpha1_lva_pb.AnalysisDefinition | undefined;
    setAnalysisDefinition(value?: google_cloud_visionai_v1alpha1_lva_pb.AnalysisDefinition): Analysis;

    getInputStreamsMappingMap(): jspb.Map<string, string>;
    clearInputStreamsMappingMap(): void;

    getOutputStreamsMappingMap(): jspb.Map<string, string>;
    clearOutputStreamsMappingMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Analysis.AsObject;
    static toObject(includeInstance: boolean, msg: Analysis): Analysis.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Analysis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Analysis;
    static deserializeBinaryFromReader(message: Analysis, reader: jspb.BinaryReader): Analysis;
}

export namespace Analysis {
    export type AsObject = {
        name: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,
        analysisDefinition?: google_cloud_visionai_v1alpha1_lva_pb.AnalysisDefinition.AsObject,

        inputStreamsMappingMap: Array<[string, string]>,

        outputStreamsMappingMap: Array<[string, string]>,
    }
}

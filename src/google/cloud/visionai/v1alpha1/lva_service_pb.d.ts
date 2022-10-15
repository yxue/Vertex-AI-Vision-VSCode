// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/lva_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_cloud_visionai_v1alpha1_lva_resources_pb from "../../../../google/cloud/visionai/v1alpha1/lva_resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListOperatorsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListOperatorsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListOperatorsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListOperatorsRequest;
    getFilter(): string;
    setFilter(value: string): ListOperatorsRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListOperatorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperatorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperatorsRequest): ListOperatorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperatorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperatorsRequest;
    static deserializeBinaryFromReader(message: ListOperatorsRequest, reader: jspb.BinaryReader): ListOperatorsRequest;
}

export namespace ListOperatorsRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListOperatorsResponse extends jspb.Message { 
    clearOperatorsList(): void;
    getOperatorsList(): Array<google_cloud_visionai_v1alpha1_lva_resources_pb.Operator>;
    setOperatorsList(value: Array<google_cloud_visionai_v1alpha1_lva_resources_pb.Operator>): ListOperatorsResponse;
    addOperators(value?: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator, index?: number): google_cloud_visionai_v1alpha1_lva_resources_pb.Operator;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListOperatorsResponse;
    clearUnreachableList(): void;
    getUnreachableList(): Array<string>;
    setUnreachableList(value: Array<string>): ListOperatorsResponse;
    addUnreachable(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperatorsResponse): ListOperatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperatorsResponse;
    static deserializeBinaryFromReader(message: ListOperatorsResponse, reader: jspb.BinaryReader): ListOperatorsResponse;
}

export namespace ListOperatorsResponse {
    export type AsObject = {
        operatorsList: Array<google_cloud_visionai_v1alpha1_lva_resources_pb.Operator.AsObject>,
        nextPageToken: string,
        unreachableList: Array<string>,
    }
}

export class GetOperatorRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetOperatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperatorRequest): GetOperatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperatorRequest;
    static deserializeBinaryFromReader(message: GetOperatorRequest, reader: jspb.BinaryReader): GetOperatorRequest;
}

export namespace GetOperatorRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateOperatorRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateOperatorRequest;
    getOperatorId(): string;
    setOperatorId(value: string): CreateOperatorRequest;

    hasOperator(): boolean;
    clearOperator(): void;
    getOperator(): google_cloud_visionai_v1alpha1_lva_resources_pb.Operator | undefined;
    setOperator(value?: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator): CreateOperatorRequest;
    getRequestId(): string;
    setRequestId(value: string): CreateOperatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOperatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOperatorRequest): CreateOperatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOperatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOperatorRequest;
    static deserializeBinaryFromReader(message: CreateOperatorRequest, reader: jspb.BinaryReader): CreateOperatorRequest;
}

export namespace CreateOperatorRequest {
    export type AsObject = {
        parent: string,
        operatorId: string,
        operator?: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator.AsObject,
        requestId: string,
    }
}

export class UpdateOperatorRequest extends jspb.Message { 

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateOperatorRequest;

    hasOperator(): boolean;
    clearOperator(): void;
    getOperator(): google_cloud_visionai_v1alpha1_lva_resources_pb.Operator | undefined;
    setOperator(value?: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator): UpdateOperatorRequest;
    getRequestId(): string;
    setRequestId(value: string): UpdateOperatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOperatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOperatorRequest): UpdateOperatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOperatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOperatorRequest;
    static deserializeBinaryFromReader(message: UpdateOperatorRequest, reader: jspb.BinaryReader): UpdateOperatorRequest;
}

export namespace UpdateOperatorRequest {
    export type AsObject = {
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        operator?: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator.AsObject,
        requestId: string,
    }
}

export class DeleteOperatorRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteOperatorRequest;
    getRequestId(): string;
    setRequestId(value: string): DeleteOperatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteOperatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteOperatorRequest): DeleteOperatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteOperatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteOperatorRequest;
    static deserializeBinaryFromReader(message: DeleteOperatorRequest, reader: jspb.BinaryReader): DeleteOperatorRequest;
}

export namespace DeleteOperatorRequest {
    export type AsObject = {
        name: string,
        requestId: string,
    }
}

export class ListAnalysesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListAnalysesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAnalysesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAnalysesRequest;
    getFilter(): string;
    setFilter(value: string): ListAnalysesRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListAnalysesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnalysesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnalysesRequest): ListAnalysesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnalysesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnalysesRequest;
    static deserializeBinaryFromReader(message: ListAnalysesRequest, reader: jspb.BinaryReader): ListAnalysesRequest;
}

export namespace ListAnalysesRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListAnalysesResponse extends jspb.Message { 
    clearAnalysesList(): void;
    getAnalysesList(): Array<google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis>;
    setAnalysesList(value: Array<google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis>): ListAnalysesResponse;
    addAnalyses(value?: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis, index?: number): google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAnalysesResponse;
    clearUnreachableList(): void;
    getUnreachableList(): Array<string>;
    setUnreachableList(value: Array<string>): ListAnalysesResponse;
    addUnreachable(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnalysesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnalysesResponse): ListAnalysesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnalysesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnalysesResponse;
    static deserializeBinaryFromReader(message: ListAnalysesResponse, reader: jspb.BinaryReader): ListAnalysesResponse;
}

export namespace ListAnalysesResponse {
    export type AsObject = {
        analysesList: Array<google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis.AsObject>,
        nextPageToken: string,
        unreachableList: Array<string>,
    }
}

export class GetAnalysisRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetAnalysisRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnalysisRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnalysisRequest): GetAnalysisRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnalysisRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnalysisRequest;
    static deserializeBinaryFromReader(message: GetAnalysisRequest, reader: jspb.BinaryReader): GetAnalysisRequest;
}

export namespace GetAnalysisRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateAnalysisRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateAnalysisRequest;
    getAnalysisId(): string;
    setAnalysisId(value: string): CreateAnalysisRequest;

    hasAnalysis(): boolean;
    clearAnalysis(): void;
    getAnalysis(): google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis | undefined;
    setAnalysis(value?: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis): CreateAnalysisRequest;
    getRequestId(): string;
    setRequestId(value: string): CreateAnalysisRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAnalysisRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAnalysisRequest): CreateAnalysisRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAnalysisRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAnalysisRequest;
    static deserializeBinaryFromReader(message: CreateAnalysisRequest, reader: jspb.BinaryReader): CreateAnalysisRequest;
}

export namespace CreateAnalysisRequest {
    export type AsObject = {
        parent: string,
        analysisId: string,
        analysis?: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis.AsObject,
        requestId: string,
    }
}

export class UpdateAnalysisRequest extends jspb.Message { 

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAnalysisRequest;

    hasAnalysis(): boolean;
    clearAnalysis(): void;
    getAnalysis(): google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis | undefined;
    setAnalysis(value?: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis): UpdateAnalysisRequest;
    getRequestId(): string;
    setRequestId(value: string): UpdateAnalysisRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAnalysisRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAnalysisRequest): UpdateAnalysisRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAnalysisRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAnalysisRequest;
    static deserializeBinaryFromReader(message: UpdateAnalysisRequest, reader: jspb.BinaryReader): UpdateAnalysisRequest;
}

export namespace UpdateAnalysisRequest {
    export type AsObject = {
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        analysis?: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis.AsObject,
        requestId: string,
    }
}

export class DeleteAnalysisRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteAnalysisRequest;
    getRequestId(): string;
    setRequestId(value: string): DeleteAnalysisRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAnalysisRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAnalysisRequest): DeleteAnalysisRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAnalysisRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAnalysisRequest;
    static deserializeBinaryFromReader(message: DeleteAnalysisRequest, reader: jspb.BinaryReader): DeleteAnalysisRequest;
}

export namespace DeleteAnalysisRequest {
    export type AsObject = {
        name: string,
        requestId: string,
    }
}

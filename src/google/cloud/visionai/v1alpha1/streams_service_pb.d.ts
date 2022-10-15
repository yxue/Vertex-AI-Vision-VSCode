// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/streams_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_cloud_visionai_v1alpha1_common_pb from "../../../../google/cloud/visionai/v1alpha1/common_pb";
import * as google_cloud_visionai_v1alpha1_streams_resources_pb from "../../../../google/cloud/visionai/v1alpha1/streams_resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListClustersRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListClustersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClustersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClustersRequest;
    getFilter(): string;
    setFilter(value: string): ListClustersRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListClustersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
    static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListClustersResponse extends jspb.Message { 
    clearClustersList(): void;
    getClustersList(): Array<google_cloud_visionai_v1alpha1_common_pb.Cluster>;
    setClustersList(value: Array<google_cloud_visionai_v1alpha1_common_pb.Cluster>): ListClustersResponse;
    addClusters(value?: google_cloud_visionai_v1alpha1_common_pb.Cluster, index?: number): google_cloud_visionai_v1alpha1_common_pb.Cluster;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClustersResponse;
    clearUnreachableList(): void;
    getUnreachableList(): Array<string>;
    setUnreachableList(value: Array<string>): ListClustersResponse;
    addUnreachable(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
    static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
    export type AsObject = {
        clustersList: Array<google_cloud_visionai_v1alpha1_common_pb.Cluster.AsObject>,
        nextPageToken: string,
        unreachableList: Array<string>,
    }
}

export class GetClusterRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClusterRequest): GetClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClusterRequest;
    static deserializeBinaryFromReader(message: GetClusterRequest, reader: jspb.BinaryReader): GetClusterRequest;
}

export namespace GetClusterRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateClusterRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateClusterRequest;
    getClusterId(): string;
    setClusterId(value: string): CreateClusterRequest;

    hasCluster(): boolean;
    clearCluster(): void;
    getCluster(): google_cloud_visionai_v1alpha1_common_pb.Cluster | undefined;
    setCluster(value?: google_cloud_visionai_v1alpha1_common_pb.Cluster): CreateClusterRequest;
    getRequestId(): string;
    setRequestId(value: string): CreateClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterRequest): CreateClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterRequest;
    static deserializeBinaryFromReader(message: CreateClusterRequest, reader: jspb.BinaryReader): CreateClusterRequest;
}

export namespace CreateClusterRequest {
    export type AsObject = {
        parent: string,
        clusterId: string,
        cluster?: google_cloud_visionai_v1alpha1_common_pb.Cluster.AsObject,
        requestId: string,
    }
}

export class UpdateClusterRequest extends jspb.Message { 

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateClusterRequest;

    hasCluster(): boolean;
    clearCluster(): void;
    getCluster(): google_cloud_visionai_v1alpha1_common_pb.Cluster | undefined;
    setCluster(value?: google_cloud_visionai_v1alpha1_common_pb.Cluster): UpdateClusterRequest;
    getRequestId(): string;
    setRequestId(value: string): UpdateClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterRequest): UpdateClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterRequest;
    static deserializeBinaryFromReader(message: UpdateClusterRequest, reader: jspb.BinaryReader): UpdateClusterRequest;
}

export namespace UpdateClusterRequest {
    export type AsObject = {
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        cluster?: google_cloud_visionai_v1alpha1_common_pb.Cluster.AsObject,
        requestId: string,
    }
}

export class DeleteClusterRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteClusterRequest;
    getRequestId(): string;
    setRequestId(value: string): DeleteClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterRequest): DeleteClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterRequest;
    static deserializeBinaryFromReader(message: DeleteClusterRequest, reader: jspb.BinaryReader): DeleteClusterRequest;
}

export namespace DeleteClusterRequest {
    export type AsObject = {
        name: string,
        requestId: string,
    }
}

export class ListStreamsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListStreamsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListStreamsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListStreamsRequest;
    getFilter(): string;
    setFilter(value: string): ListStreamsRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListStreamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStreamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStreamsRequest): ListStreamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStreamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStreamsRequest;
    static deserializeBinaryFromReader(message: ListStreamsRequest, reader: jspb.BinaryReader): ListStreamsRequest;
}

export namespace ListStreamsRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListStreamsResponse extends jspb.Message { 
    clearStreamsList(): void;
    getStreamsList(): Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Stream>;
    setStreamsList(value: Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Stream>): ListStreamsResponse;
    addStreams(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream, index?: number): google_cloud_visionai_v1alpha1_streams_resources_pb.Stream;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListStreamsResponse;
    clearUnreachableList(): void;
    getUnreachableList(): Array<string>;
    setUnreachableList(value: Array<string>): ListStreamsResponse;
    addUnreachable(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStreamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStreamsResponse): ListStreamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStreamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStreamsResponse;
    static deserializeBinaryFromReader(message: ListStreamsResponse, reader: jspb.BinaryReader): ListStreamsResponse;
}

export namespace ListStreamsResponse {
    export type AsObject = {
        streamsList: Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Stream.AsObject>,
        nextPageToken: string,
        unreachableList: Array<string>,
    }
}

export class GetStreamRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStreamRequest): GetStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStreamRequest;
    static deserializeBinaryFromReader(message: GetStreamRequest, reader: jspb.BinaryReader): GetStreamRequest;
}

export namespace GetStreamRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateStreamRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateStreamRequest;
    getStreamId(): string;
    setStreamId(value: string): CreateStreamRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): google_cloud_visionai_v1alpha1_streams_resources_pb.Stream | undefined;
    setStream(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream): CreateStreamRequest;
    getRequestId(): string;
    setRequestId(value: string): CreateStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateStreamRequest): CreateStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateStreamRequest;
    static deserializeBinaryFromReader(message: CreateStreamRequest, reader: jspb.BinaryReader): CreateStreamRequest;
}

export namespace CreateStreamRequest {
    export type AsObject = {
        parent: string,
        streamId: string,
        stream?: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream.AsObject,
        requestId: string,
    }
}

export class UpdateStreamRequest extends jspb.Message { 

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateStreamRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): google_cloud_visionai_v1alpha1_streams_resources_pb.Stream | undefined;
    setStream(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream): UpdateStreamRequest;
    getRequestId(): string;
    setRequestId(value: string): UpdateStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateStreamRequest): UpdateStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateStreamRequest;
    static deserializeBinaryFromReader(message: UpdateStreamRequest, reader: jspb.BinaryReader): UpdateStreamRequest;
}

export namespace UpdateStreamRequest {
    export type AsObject = {
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        stream?: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream.AsObject,
        requestId: string,
    }
}

export class DeleteStreamRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteStreamRequest;
    getRequestId(): string;
    setRequestId(value: string): DeleteStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteStreamRequest): DeleteStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteStreamRequest;
    static deserializeBinaryFromReader(message: DeleteStreamRequest, reader: jspb.BinaryReader): DeleteStreamRequest;
}

export namespace DeleteStreamRequest {
    export type AsObject = {
        name: string,
        requestId: string,
    }
}

export class GetStreamThumbnailRequest extends jspb.Message { 
    getStream(): string;
    setStream(value: string): GetStreamThumbnailRequest;
    getGcsObjectName(): string;
    setGcsObjectName(value: string): GetStreamThumbnailRequest;
    getEvent(): string;
    setEvent(value: string): GetStreamThumbnailRequest;
    getRequestId(): string;
    setRequestId(value: string): GetStreamThumbnailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStreamThumbnailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStreamThumbnailRequest): GetStreamThumbnailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStreamThumbnailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStreamThumbnailRequest;
    static deserializeBinaryFromReader(message: GetStreamThumbnailRequest, reader: jspb.BinaryReader): GetStreamThumbnailRequest;
}

export namespace GetStreamThumbnailRequest {
    export type AsObject = {
        stream: string,
        gcsObjectName: string,
        event: string,
        requestId: string,
    }
}

export class GetStreamThumbnailResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStreamThumbnailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStreamThumbnailResponse): GetStreamThumbnailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStreamThumbnailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStreamThumbnailResponse;
    static deserializeBinaryFromReader(message: GetStreamThumbnailResponse, reader: jspb.BinaryReader): GetStreamThumbnailResponse;
}

export namespace GetStreamThumbnailResponse {
    export type AsObject = {
    }
}

export class ListEventsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListEventsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListEventsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListEventsRequest;
    getFilter(): string;
    setFilter(value: string): ListEventsRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
    static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListEventsResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Event>;
    setEventsList(value: Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Event>): ListEventsResponse;
    addEvents(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Event, index?: number): google_cloud_visionai_v1alpha1_streams_resources_pb.Event;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListEventsResponse;
    clearUnreachableList(): void;
    getUnreachableList(): Array<string>;
    setUnreachableList(value: Array<string>): ListEventsResponse;
    addUnreachable(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
    static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
    export type AsObject = {
        eventsList: Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Event.AsObject>,
        nextPageToken: string,
        unreachableList: Array<string>,
    }
}

export class GetEventRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventRequest): GetEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventRequest;
    static deserializeBinaryFromReader(message: GetEventRequest, reader: jspb.BinaryReader): GetEventRequest;
}

export namespace GetEventRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateEventRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateEventRequest;
    getEventId(): string;
    setEventId(value: string): CreateEventRequest;

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): google_cloud_visionai_v1alpha1_streams_resources_pb.Event | undefined;
    setEvent(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Event): CreateEventRequest;
    getRequestId(): string;
    setRequestId(value: string): CreateEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEventRequest): CreateEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEventRequest;
    static deserializeBinaryFromReader(message: CreateEventRequest, reader: jspb.BinaryReader): CreateEventRequest;
}

export namespace CreateEventRequest {
    export type AsObject = {
        parent: string,
        eventId: string,
        event?: google_cloud_visionai_v1alpha1_streams_resources_pb.Event.AsObject,
        requestId: string,
    }
}

export class UpdateEventRequest extends jspb.Message { 

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateEventRequest;

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): google_cloud_visionai_v1alpha1_streams_resources_pb.Event | undefined;
    setEvent(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Event): UpdateEventRequest;
    getRequestId(): string;
    setRequestId(value: string): UpdateEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEventRequest): UpdateEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEventRequest;
    static deserializeBinaryFromReader(message: UpdateEventRequest, reader: jspb.BinaryReader): UpdateEventRequest;
}

export namespace UpdateEventRequest {
    export type AsObject = {
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        event?: google_cloud_visionai_v1alpha1_streams_resources_pb.Event.AsObject,
        requestId: string,
    }
}

export class DeleteEventRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteEventRequest;
    getRequestId(): string;
    setRequestId(value: string): DeleteEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEventRequest): DeleteEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEventRequest;
    static deserializeBinaryFromReader(message: DeleteEventRequest, reader: jspb.BinaryReader): DeleteEventRequest;
}

export namespace DeleteEventRequest {
    export type AsObject = {
        name: string,
        requestId: string,
    }
}

export class ListSeriesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListSeriesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSeriesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSeriesRequest;
    getFilter(): string;
    setFilter(value: string): ListSeriesRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListSeriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSeriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSeriesRequest): ListSeriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSeriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSeriesRequest;
    static deserializeBinaryFromReader(message: ListSeriesRequest, reader: jspb.BinaryReader): ListSeriesRequest;
}

export namespace ListSeriesRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListSeriesResponse extends jspb.Message { 
    clearSeriesList(): void;
    getSeriesList(): Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Series>;
    setSeriesList(value: Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Series>): ListSeriesResponse;
    addSeries(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Series, index?: number): google_cloud_visionai_v1alpha1_streams_resources_pb.Series;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSeriesResponse;
    clearUnreachableList(): void;
    getUnreachableList(): Array<string>;
    setUnreachableList(value: Array<string>): ListSeriesResponse;
    addUnreachable(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSeriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSeriesResponse): ListSeriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSeriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSeriesResponse;
    static deserializeBinaryFromReader(message: ListSeriesResponse, reader: jspb.BinaryReader): ListSeriesResponse;
}

export namespace ListSeriesResponse {
    export type AsObject = {
        seriesList: Array<google_cloud_visionai_v1alpha1_streams_resources_pb.Series.AsObject>,
        nextPageToken: string,
        unreachableList: Array<string>,
    }
}

export class GetSeriesRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetSeriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSeriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSeriesRequest): GetSeriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSeriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSeriesRequest;
    static deserializeBinaryFromReader(message: GetSeriesRequest, reader: jspb.BinaryReader): GetSeriesRequest;
}

export namespace GetSeriesRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateSeriesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateSeriesRequest;
    getSeriesId(): string;
    setSeriesId(value: string): CreateSeriesRequest;

    hasSeries(): boolean;
    clearSeries(): void;
    getSeries(): google_cloud_visionai_v1alpha1_streams_resources_pb.Series | undefined;
    setSeries(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Series): CreateSeriesRequest;
    getRequestId(): string;
    setRequestId(value: string): CreateSeriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSeriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSeriesRequest): CreateSeriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSeriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSeriesRequest;
    static deserializeBinaryFromReader(message: CreateSeriesRequest, reader: jspb.BinaryReader): CreateSeriesRequest;
}

export namespace CreateSeriesRequest {
    export type AsObject = {
        parent: string,
        seriesId: string,
        series?: google_cloud_visionai_v1alpha1_streams_resources_pb.Series.AsObject,
        requestId: string,
    }
}

export class UpdateSeriesRequest extends jspb.Message { 

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSeriesRequest;

    hasSeries(): boolean;
    clearSeries(): void;
    getSeries(): google_cloud_visionai_v1alpha1_streams_resources_pb.Series | undefined;
    setSeries(value?: google_cloud_visionai_v1alpha1_streams_resources_pb.Series): UpdateSeriesRequest;
    getRequestId(): string;
    setRequestId(value: string): UpdateSeriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSeriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSeriesRequest): UpdateSeriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSeriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSeriesRequest;
    static deserializeBinaryFromReader(message: UpdateSeriesRequest, reader: jspb.BinaryReader): UpdateSeriesRequest;
}

export namespace UpdateSeriesRequest {
    export type AsObject = {
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        series?: google_cloud_visionai_v1alpha1_streams_resources_pb.Series.AsObject,
        requestId: string,
    }
}

export class DeleteSeriesRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteSeriesRequest;
    getRequestId(): string;
    setRequestId(value: string): DeleteSeriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSeriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSeriesRequest): DeleteSeriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSeriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSeriesRequest;
    static deserializeBinaryFromReader(message: DeleteSeriesRequest, reader: jspb.BinaryReader): DeleteSeriesRequest;
}

export namespace DeleteSeriesRequest {
    export type AsObject = {
        name: string,
        requestId: string,
    }
}

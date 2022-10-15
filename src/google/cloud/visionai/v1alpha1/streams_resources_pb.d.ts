// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/streams_resources.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Stream extends jspb.Message { 
    getName(): string;
    setName(value: string): Stream;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Stream;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Stream;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;
    getDisplayName(): string;
    setDisplayName(value: string): Stream;
    getEnableHlsPlayback(): boolean;
    setEnableHlsPlayback(value: boolean): Stream;
    getMediaWarehouseAsset(): string;
    setMediaWarehouseAsset(value: string): Stream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stream.AsObject;
    static toObject(includeInstance: boolean, msg: Stream): Stream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stream;
    static deserializeBinaryFromReader(message: Stream, reader: jspb.BinaryReader): Stream;
}

export namespace Stream {
    export type AsObject = {
        name: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,

        annotationsMap: Array<[string, string]>,
        displayName: string,
        enableHlsPlayback: boolean,
        mediaWarehouseAsset: string,
    }
}

export class Event extends jspb.Message { 
    getName(): string;
    setName(value: string): Event;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Event;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Event;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;
    getAlignmentClock(): Event.Clock;
    setAlignmentClock(value: Event.Clock): Event;

    hasGracePeriod(): boolean;
    clearGracePeriod(): void;
    getGracePeriod(): google_protobuf_duration_pb.Duration | undefined;
    setGracePeriod(value?: google_protobuf_duration_pb.Duration): Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        name: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,

        annotationsMap: Array<[string, string]>,
        alignmentClock: Event.Clock,
        gracePeriod?: google_protobuf_duration_pb.Duration.AsObject,
    }

    export enum Clock {
    CLOCK_UNSPECIFIED = 0,
    CAPTURE = 1,
    INGEST = 2,
    }

}

export class Series extends jspb.Message { 
    getName(): string;
    setName(value: string): Series;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Series;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Series;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    getAnnotationsMap(): jspb.Map<string, string>;
    clearAnnotationsMap(): void;
    getStream(): string;
    setStream(value: string): Series;
    getEvent(): string;
    setEvent(value: string): Series;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Series.AsObject;
    static toObject(includeInstance: boolean, msg: Series): Series.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Series, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Series;
    static deserializeBinaryFromReader(message: Series, reader: jspb.BinaryReader): Series;
}

export namespace Series {
    export type AsObject = {
        name: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,

        annotationsMap: Array<[string, string]>,
        stream: string,
        event: string,
    }
}

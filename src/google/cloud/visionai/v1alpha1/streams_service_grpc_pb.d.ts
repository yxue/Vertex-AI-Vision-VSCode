// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/streams_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as google_cloud_visionai_v1alpha1_streams_service_pb from "../../../../google/cloud/visionai/v1alpha1/streams_service_pb";
import * as google_cloud_visionai_v1alpha1_common_pb from "../../../../google/cloud/visionai/v1alpha1/common_pb";
import * as google_cloud_visionai_v1alpha1_streams_resources_pb from "../../../../google/cloud/visionai/v1alpha1/streams_resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

interface IStreamsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listClusters: IStreamsServiceService_IListClusters;
    getCluster: IStreamsServiceService_IGetCluster;
    createCluster: IStreamsServiceService_ICreateCluster;
    updateCluster: IStreamsServiceService_IUpdateCluster;
    deleteCluster: IStreamsServiceService_IDeleteCluster;
    listStreams: IStreamsServiceService_IListStreams;
    getStream: IStreamsServiceService_IGetStream;
    createStream: IStreamsServiceService_ICreateStream;
    updateStream: IStreamsServiceService_IUpdateStream;
    deleteStream: IStreamsServiceService_IDeleteStream;
    getStreamThumbnail: IStreamsServiceService_IGetStreamThumbnail;
    listEvents: IStreamsServiceService_IListEvents;
    getEvent: IStreamsServiceService_IGetEvent;
    createEvent: IStreamsServiceService_ICreateEvent;
    updateEvent: IStreamsServiceService_IUpdateEvent;
    deleteEvent: IStreamsServiceService_IDeleteEvent;
    listSeries: IStreamsServiceService_IListSeries;
    getSeries: IStreamsServiceService_IGetSeries;
    createSeries: IStreamsServiceService_ICreateSeries;
    updateSeries: IStreamsServiceService_IUpdateSeries;
    deleteSeries: IStreamsServiceService_IDeleteSeries;
}

interface IStreamsServiceService_IListClusters extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/ListClusters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse>;
}
interface IStreamsServiceService_IGetCluster extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, google_cloud_visionai_v1alpha1_common_pb.Cluster> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/GetCluster";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_common_pb.Cluster>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_common_pb.Cluster>;
}
interface IStreamsServiceService_ICreateCluster extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/CreateCluster";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IUpdateCluster extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/UpdateCluster";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IDeleteCluster extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/DeleteCluster";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IListStreams extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/ListStreams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse>;
}
interface IStreamsServiceService_IGetStream extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, google_cloud_visionai_v1alpha1_streams_resources_pb.Stream> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/GetStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_resources_pb.Stream>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_resources_pb.Stream>;
}
interface IStreamsServiceService_ICreateStream extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/CreateStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IUpdateStream extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/UpdateStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IDeleteStream extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/DeleteStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IGetStreamThumbnail extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/GetStreamThumbnail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IListEvents extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/ListEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse>;
}
interface IStreamsServiceService_IGetEvent extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, google_cloud_visionai_v1alpha1_streams_resources_pb.Event> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/GetEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_resources_pb.Event>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_resources_pb.Event>;
}
interface IStreamsServiceService_ICreateEvent extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/CreateEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IUpdateEvent extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/UpdateEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IDeleteEvent extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/DeleteEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IListSeries extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/ListSeries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse>;
}
interface IStreamsServiceService_IGetSeries extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, google_cloud_visionai_v1alpha1_streams_resources_pb.Series> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/GetSeries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_resources_pb.Series>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_resources_pb.Series>;
}
interface IStreamsServiceService_ICreateSeries extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/CreateSeries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IUpdateSeries extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/UpdateSeries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IStreamsServiceService_IDeleteSeries extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.StreamsService/DeleteSeries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}

export const StreamsServiceService: IStreamsServiceService;

export interface IStreamsServiceServer extends grpc.UntypedServiceImplementation {
    listClusters: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse>;
    getCluster: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, google_cloud_visionai_v1alpha1_common_pb.Cluster>;
    createCluster: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, google_longrunning_operations_pb.Operation>;
    updateCluster: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, google_longrunning_operations_pb.Operation>;
    deleteCluster: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, google_longrunning_operations_pb.Operation>;
    listStreams: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse>;
    getStream: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, google_cloud_visionai_v1alpha1_streams_resources_pb.Stream>;
    createStream: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, google_longrunning_operations_pb.Operation>;
    updateStream: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, google_longrunning_operations_pb.Operation>;
    deleteStream: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, google_longrunning_operations_pb.Operation>;
    getStreamThumbnail: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, google_longrunning_operations_pb.Operation>;
    listEvents: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse>;
    getEvent: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, google_cloud_visionai_v1alpha1_streams_resources_pb.Event>;
    createEvent: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, google_longrunning_operations_pb.Operation>;
    updateEvent: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, google_longrunning_operations_pb.Operation>;
    deleteEvent: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, google_longrunning_operations_pb.Operation>;
    listSeries: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse>;
    getSeries: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, google_cloud_visionai_v1alpha1_streams_resources_pb.Series>;
    createSeries: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, google_longrunning_operations_pb.Operation>;
    updateSeries: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, google_longrunning_operations_pb.Operation>;
    deleteSeries: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, google_longrunning_operations_pb.Operation>;
}

export interface IStreamsServiceClient {
    listClusters(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    listClusters(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    listClusters(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    getCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_common_pb.Cluster) => void): grpc.ClientUnaryCall;
    getCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_common_pb.Cluster) => void): grpc.ClientUnaryCall;
    getCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_common_pb.Cluster) => void): grpc.ClientUnaryCall;
    createCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    listStreams(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    listStreams(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    listStreams(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    getStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream) => void): grpc.ClientUnaryCall;
    getStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream) => void): grpc.ClientUnaryCall;
    getStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream) => void): grpc.ClientUnaryCall;
    createStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    getStreamThumbnail(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    getStreamThumbnail(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    getStreamThumbnail(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    listEvents(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse) => void): grpc.ClientUnaryCall;
    listEvents(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse) => void): grpc.ClientUnaryCall;
    listEvents(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse) => void): grpc.ClientUnaryCall;
    getEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Event) => void): grpc.ClientUnaryCall;
    getEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Event) => void): grpc.ClientUnaryCall;
    getEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Event) => void): grpc.ClientUnaryCall;
    createEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    listSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse) => void): grpc.ClientUnaryCall;
    listSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse) => void): grpc.ClientUnaryCall;
    listSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse) => void): grpc.ClientUnaryCall;
    getSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Series) => void): grpc.ClientUnaryCall;
    getSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Series) => void): grpc.ClientUnaryCall;
    getSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Series) => void): grpc.ClientUnaryCall;
    createSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class StreamsServiceClient extends grpc.Client implements IStreamsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listClusters(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public listClusters(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public listClusters(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public getCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_common_pb.Cluster) => void): grpc.ClientUnaryCall;
    public getCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_common_pb.Cluster) => void): grpc.ClientUnaryCall;
    public getCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_common_pb.Cluster) => void): grpc.ClientUnaryCall;
    public createCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCluster(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public listStreams(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    public listStreams(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    public listStreams(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    public getStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream) => void): grpc.ClientUnaryCall;
    public getStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream) => void): grpc.ClientUnaryCall;
    public getStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream) => void): grpc.ClientUnaryCall;
    public createStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteStream(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public getStreamThumbnail(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public getStreamThumbnail(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public getStreamThumbnail(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public listEvents(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse) => void): grpc.ClientUnaryCall;
    public listEvents(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse) => void): grpc.ClientUnaryCall;
    public listEvents(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse) => void): grpc.ClientUnaryCall;
    public getEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Event) => void): grpc.ClientUnaryCall;
    public getEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Event) => void): grpc.ClientUnaryCall;
    public getEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Event) => void): grpc.ClientUnaryCall;
    public createEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public listSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse) => void): grpc.ClientUnaryCall;
    public listSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse) => void): grpc.ClientUnaryCall;
    public listSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse) => void): grpc.ClientUnaryCall;
    public getSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Series) => void): grpc.ClientUnaryCall;
    public getSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Series) => void): grpc.ClientUnaryCall;
    public getSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_streams_resources_pb.Series) => void): grpc.ClientUnaryCall;
    public createSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteSeries(request: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
}

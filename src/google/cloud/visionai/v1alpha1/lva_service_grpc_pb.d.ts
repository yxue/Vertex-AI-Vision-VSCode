// package: google.cloud.visionai.v1alpha1
// file: google/cloud/visionai/v1alpha1/lva_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as google_cloud_visionai_v1alpha1_lva_service_pb from "../../../../google/cloud/visionai/v1alpha1/lva_service_pb";
import * as google_cloud_visionai_v1alpha1_lva_resources_pb from "../../../../google/cloud/visionai/v1alpha1/lva_resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

interface ILiveVideoAnalyticsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listOperators: ILiveVideoAnalyticsService_IListOperators;
    getOperator: ILiveVideoAnalyticsService_IGetOperator;
    createOperator: ILiveVideoAnalyticsService_ICreateOperator;
    updateOperator: ILiveVideoAnalyticsService_IUpdateOperator;
    deleteOperator: ILiveVideoAnalyticsService_IDeleteOperator;
    listAnalyses: ILiveVideoAnalyticsService_IListAnalyses;
    getAnalysis: ILiveVideoAnalyticsService_IGetAnalysis;
    createAnalysis: ILiveVideoAnalyticsService_ICreateAnalysis;
    updateAnalysis: ILiveVideoAnalyticsService_IUpdateAnalysis;
    deleteAnalysis: ILiveVideoAnalyticsService_IDeleteAnalysis;
}

interface ILiveVideoAnalyticsService_IListOperators extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/ListOperators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse>;
}
interface ILiveVideoAnalyticsService_IGetOperator extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, google_cloud_visionai_v1alpha1_lva_resources_pb.Operator> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/GetOperator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_resources_pb.Operator>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_resources_pb.Operator>;
}
interface ILiveVideoAnalyticsService_ICreateOperator extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/CreateOperator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface ILiveVideoAnalyticsService_IUpdateOperator extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/UpdateOperator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface ILiveVideoAnalyticsService_IDeleteOperator extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/DeleteOperator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface ILiveVideoAnalyticsService_IListAnalyses extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/ListAnalyses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse>;
}
interface ILiveVideoAnalyticsService_IGetAnalysis extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/GetAnalysis";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest>;
    responseSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis>;
    responseDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis>;
}
interface ILiveVideoAnalyticsService_ICreateAnalysis extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/CreateAnalysis";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface ILiveVideoAnalyticsService_IUpdateAnalysis extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/UpdateAnalysis";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface ILiveVideoAnalyticsService_IDeleteAnalysis extends grpc.MethodDefinition<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/DeleteAnalysis";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}

export const LiveVideoAnalyticsService: ILiveVideoAnalyticsService;

export interface ILiveVideoAnalyticsServer extends grpc.UntypedServiceImplementation {
    listOperators: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse>;
    getOperator: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, google_cloud_visionai_v1alpha1_lva_resources_pb.Operator>;
    createOperator: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, google_longrunning_operations_pb.Operation>;
    updateOperator: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, google_longrunning_operations_pb.Operation>;
    deleteOperator: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, google_longrunning_operations_pb.Operation>;
    listAnalyses: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse>;
    getAnalysis: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis>;
    createAnalysis: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, google_longrunning_operations_pb.Operation>;
    updateAnalysis: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, google_longrunning_operations_pb.Operation>;
    deleteAnalysis: grpc.handleUnaryCall<google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, google_longrunning_operations_pb.Operation>;
}

export interface ILiveVideoAnalyticsClient {
    listOperators(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse) => void): grpc.ClientUnaryCall;
    listOperators(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse) => void): grpc.ClientUnaryCall;
    listOperators(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse) => void): grpc.ClientUnaryCall;
    getOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator) => void): grpc.ClientUnaryCall;
    getOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator) => void): grpc.ClientUnaryCall;
    getOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator) => void): grpc.ClientUnaryCall;
    createOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    listAnalyses(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse) => void): grpc.ClientUnaryCall;
    listAnalyses(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse) => void): grpc.ClientUnaryCall;
    listAnalyses(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse) => void): grpc.ClientUnaryCall;
    getAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis) => void): grpc.ClientUnaryCall;
    getAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis) => void): grpc.ClientUnaryCall;
    getAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis) => void): grpc.ClientUnaryCall;
    createAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class LiveVideoAnalyticsClient extends grpc.Client implements ILiveVideoAnalyticsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listOperators(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse) => void): grpc.ClientUnaryCall;
    public listOperators(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse) => void): grpc.ClientUnaryCall;
    public listOperators(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse) => void): grpc.ClientUnaryCall;
    public getOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator) => void): grpc.ClientUnaryCall;
    public getOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator) => void): grpc.ClientUnaryCall;
    public getOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator) => void): grpc.ClientUnaryCall;
    public createOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteOperator(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public listAnalyses(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse) => void): grpc.ClientUnaryCall;
    public listAnalyses(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse) => void): grpc.ClientUnaryCall;
    public listAnalyses(request: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse) => void): grpc.ClientUnaryCall;
    public getAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis) => void): grpc.ClientUnaryCall;
    public getAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis) => void): grpc.ClientUnaryCall;
    public getAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis) => void): grpc.ClientUnaryCall;
    public createAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteAnalysis(request: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
}

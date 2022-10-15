// package: google.longrunning
// file: google/longrunning/operations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

interface IOperationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listOperations: IOperationsService_IListOperations;
    getOperation: IOperationsService_IGetOperation;
    deleteOperation: IOperationsService_IDeleteOperation;
    cancelOperation: IOperationsService_ICancelOperation;
    waitOperation: IOperationsService_IWaitOperation;
}

interface IOperationsService_IListOperations extends grpc.MethodDefinition<google_longrunning_operations_pb.ListOperationsRequest, google_longrunning_operations_pb.ListOperationsResponse> {
    path: "/google.longrunning.Operations/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.ListOperationsRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.ListOperationsRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.ListOperationsResponse>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.ListOperationsResponse>;
}
interface IOperationsService_IGetOperation extends grpc.MethodDefinition<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.longrunning.Operations/GetOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.GetOperationRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.GetOperationRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IOperationsService_IDeleteOperation extends grpc.MethodDefinition<google_longrunning_operations_pb.DeleteOperationRequest, google_protobuf_empty_pb.Empty> {
    path: "/google.longrunning.Operations/DeleteOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.DeleteOperationRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.DeleteOperationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IOperationsService_ICancelOperation extends grpc.MethodDefinition<google_longrunning_operations_pb.CancelOperationRequest, google_protobuf_empty_pb.Empty> {
    path: "/google.longrunning.Operations/CancelOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.CancelOperationRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.CancelOperationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IOperationsService_IWaitOperation extends grpc.MethodDefinition<google_longrunning_operations_pb.WaitOperationRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.longrunning.Operations/WaitOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.WaitOperationRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.WaitOperationRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}

export const OperationsService: IOperationsService;

export interface IOperationsServer extends grpc.UntypedServiceImplementation {
    listOperations: grpc.handleUnaryCall<google_longrunning_operations_pb.ListOperationsRequest, google_longrunning_operations_pb.ListOperationsResponse>;
    getOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation>;
    deleteOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.DeleteOperationRequest, google_protobuf_empty_pb.Empty>;
    cancelOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.CancelOperationRequest, google_protobuf_empty_pb.Empty>;
    waitOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.WaitOperationRequest, google_longrunning_operations_pb.Operation>;
}

export interface IOperationsClient {
    listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    getOperation(request: google_longrunning_operations_pb.GetOperationRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    waitOperation(request: google_longrunning_operations_pb.WaitOperationRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    waitOperation(request: google_longrunning_operations_pb.WaitOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    waitOperation(request: google_longrunning_operations_pb.WaitOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class OperationsClient extends grpc.Client implements IOperationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public getOperation(request: google_longrunning_operations_pb.GetOperationRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public waitOperation(request: google_longrunning_operations_pb.WaitOperationRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public waitOperation(request: google_longrunning_operations_pb.WaitOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public waitOperation(request: google_longrunning_operations_pb.WaitOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
}

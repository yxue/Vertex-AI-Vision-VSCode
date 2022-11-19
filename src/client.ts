import { ChannelCredentials, credentials, Metadata, ServiceError } from "@grpc/grpc-js";
import { GoogleAuth } from "google-auth-library";
import { IStreamsServiceClient } from "./google/cloud/visionai/v1alpha1/streams_service_grpc_pb";
import { Analysis, Cluster, Stream } from "./resources";
import * as util from 'util';
import { CreateStreamRequest, DeleteStreamRequest, ListClustersRequest, ListClustersResponse, ListStreamsRequest, ListStreamsResponse } from "./google/cloud/visionai/v1alpha1/streams_service_pb";
import { DeleteAnalysisRequest, ListAnalysesRequest, ListAnalysesResponse } from "./google/cloud/visionai/v1alpha1/lva_service_pb";
import { ILiveVideoAnalyticsClient } from "./google/cloud/visionai/v1alpha1/lva_service_grpc_pb";
import { IOperationsClient } from "./google/longrunning/operations_grpc_pb";
import { GetOperationRequest, Operation, WaitOperationRequest } from "./google/longrunning/operations_pb";
import { Duration } from "google-protobuf/google/protobuf/duration_pb";
import { Stream as StreamResource } from './google/cloud/visionai/v1alpha1/streams_resources_pb';

var messages = require('../src/google/cloud/visionai/v1alpha1/streams_service_pb');
var resources = require('../src/google/cloud/visionai/v1alpha1/streams_resources_pb');
var services = require('../src/google/cloud/visionai/v1alpha1/streams_service_grpc_pb');
var lvaMessages = require('../src/google/cloud/visionai/v1alpha1/lva_service_pb');
var lvaServices = require('../src/google/cloud/visionai/v1alpha1/lva_service_grpc_pb');
var opServices = require('../src/google/longrunning/operations_grpc_pb');
var opMessages = require('../src/google/longrunning/operations_pb');

var grpc = require('@grpc/grpc-js');

export class VisionAIClient {
    constructor(private readonly serviceEndpoint: string) {
        this.serviceEndpoint = serviceEndpoint;
    }

    async initialize() {
        if (!this.initialized) {
            var credential = await this.grpcCredentials();
            this.client = new services.StreamsServiceClient(this.serviceEndpoint, credential);
            this.lvaClient = new lvaServices.LiveVideoAnalyticsClient(this.serviceEndpoint, credential);
            this.opClient = new opServices.OperationsClient(this.serviceEndpoint, credential);
            this.initialized = true;
        }
    }

    private async grpcCredentials(): Promise<ChannelCredentials> {
        var auth = await this.auth.getApplicationDefault();
        return credentials.combineChannelCredentials(credentials.createSsl(), credentials.createFromGoogleCredential(auth.credential));
    }

    private getParent(name: string): string {
        var tokens = name.split('/');
        var parent = new Array<string>;
        for (var i = 0; i < tokens.length - 2; ++i) {
            parent.push(tokens[i]);
        }
        return parent.join('/');
    }

    private getId(name: string): string {
        var tokens = name.split('/');
        return tokens[tokens.length - 1];
    }

    async listClusters(parent: string): Promise<Cluster[]> {
        var request = new messages.ListClustersRequest();
        var meta = new grpc.Metadata();
        meta.add('x-goog-request-params', 'parent=' + parent);
        request.setParent(parent);
        var listClustersPromise = util.promisify(
            (
                req: ListClustersRequest,
                meta: Metadata,
                cb: (error: ServiceError | null, response: ListClustersResponse) => void) =>
                this.client?.listClusters(req, meta, (err, res) => cb(err, res)));
        var response = await listClustersPromise(request, meta);
        return response.getClustersList().map(
            c => new Cluster(c.getName(), c.getDataplaneServiceEndpoint())
        );
    }

    async listStreams(parent: string): Promise<Stream[]> {
        var request = new messages.ListStreamsRequest();
        var meta = new grpc.Metadata();
        meta.add('x-goog-request-params', 'parent=' + parent);
        request.setParent(parent);
        var listStreamsPromise = util.promisify(
            (
                req: ListStreamsRequest,
                meta: Metadata,
                cb: (error: ServiceError | null, response: ListStreamsResponse) => void) =>
                this.client?.listStreams(req, meta, (err, res) => cb(err, res)));
        var response = await listStreamsPromise(request, meta);
        return response.getStreamsList().map(
            s => new Stream(s.getName(), s.getDisplayName(), s.getMediaWarehouseAsset(), s.getEnableHlsPlayback())
        );
    }

    async listAnalyses(parent: string): Promise<Analysis[]> {
        var request = new lvaMessages.ListAnalysesRequest();
        var meta = new grpc.Metadata();
        meta.add('x-goog-request-params', 'parent=' + parent);
        request.setParent(parent);
        var listStreamsPromise = util.promisify(
            (
                req: ListAnalysesRequest,
                meta: Metadata,
                cb: (error: ServiceError | null, response: ListAnalysesResponse) => void) =>
                this.lvaClient?.listAnalyses(req, meta, (err, res) => cb(err, res)));
        var response = await listStreamsPromise(request, meta);
        return response.getAnalysesList().map(a => {
            var definition = a.getAnalysisDefinition();
            var def = "";
            if (definition) {
                def = definition.toString();
            }
            var input = new Map<string, string>();
            var output = new Map<string, string>();
            a.getInputStreamsMappingMap().forEach((k, v) => input.set(k, v));
            a.getOutputStreamsMappingMap().forEach((k, v) => output.set(k, v));
            return new Analysis(a.getName(), def, input, output);
        });
    }

    async deleteStream(name: string): Promise<Operation> {
        var request = new messages.DeleteStreamRequest();
        var meta = new grpc.Metadata();
        meta.add('x-goog-request-params', 'parent=' + name);
        request.setName(name);
        var deleteStreamPromise = util.promisify(
            (
                req: DeleteStreamRequest,
                meta: Metadata,
                cb: (error: ServiceError | null, response: Operation) => void) =>
                this.client?.deleteStream(req, meta, (err, res) => cb(err, res)));
        var operation = await deleteStreamPromise(request, meta);
        return this.waitForOperation(operation);
    }

    async deleteAnalysis(name: string): Promise<Operation> {
        var request = new lvaMessages.DeleteAnalysisRequest();
        var meta = new grpc.Metadata();
        meta.add('x-goog-request-params', 'parent=' + name);
        request.setName(name);
        var deleteAnalysisPromise = util.promisify(
            (
                req: DeleteAnalysisRequest,
                meta: Metadata,
                cb: (error: ServiceError | null, response: Operation) => void) =>
                this.lvaClient?.deleteAnalysis(req, meta, (err, res) => cb(err, res)));
        var operation = await deleteAnalysisPromise(request, meta);
        return this.waitForOperation(operation);
    }

    async createStream(stream: Stream): Promise<Operation> {
        var request = new messages.CreateStreamRequest();
        var meta = new grpc.Metadata();
        meta.add('x-goog-request-params', 'parent=' + this.getParent(stream.name));
        var s = new resources.Stream();
        s.setEnableHlsPlayback(stream.enableHLS);
        s.setDisplayName(stream.displayName);
        s.setMediaWarehouseAsset(stream.mwhAsset);
        request.setStream(s);
        request.setParent(this.getParent(stream.name));
        request.setStreamId(this.getId(stream.name));
        var createStreamPromise = util.promisify((
            req: CreateStreamRequest,
            meta: Metadata,
            cb: (error: ServiceError | null, response: Operation) => void) =>
            this.client?.createStream(req, meta, (err, res) => cb(err, res)));
        var operation = await createStreamPromise(request, meta);
        return this.waitForOperation(operation);
    }

    async waitForOperation(op: Operation): Promise<Operation> {
        const callWithRetry: (d: number) => Promise<Operation> = async (depth: number) => {
            if (depth > 5) {
                return op;
            }
            var getPromise = util.promisify(
                (
                    req: GetOperationRequest,
                    meta: Metadata,
                    cb: (error: ServiceError | null, response: Operation) => void) =>
                    this.opClient?.getOperation(req, meta, (err, res) => cb(err, res)));
            var request = new opMessages.GetOperationRequest();
            request.setName(op.getName());
            var meta = new grpc.Metadata();
            meta.add('x-goog-request-params', 'parent=' + op.getName());
            op = await getPromise(request, meta);
            if (op.getDone()) {
                return op;
            }
            await this.wait(2 ** depth * 10);
            return callWithRetry(depth + 1);
        };
        return await callWithRetry(0);
    }

    wait(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }


    readonly auth = new GoogleAuth();
    private client: IStreamsServiceClient | undefined;
    private lvaClient: ILiveVideoAnalyticsClient | undefined;
    private opClient: IOperationsClient | undefined;
    private initialized: boolean = false;
}


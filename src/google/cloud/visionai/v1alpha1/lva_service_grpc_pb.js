// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_cloud_visionai_v1alpha1_lva_service_pb = require('../../../../google/cloud/visionai/v1alpha1/lva_service_pb.js');
var google_cloud_visionai_v1alpha1_lva_resources_pb = require('../../../../google/cloud/visionai/v1alpha1/lva_resources_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_visionai_v1alpha1_Analysis(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.Analysis');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_Analysis(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_CreateAnalysisRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.CreateAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_CreateAnalysisRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_CreateOperatorRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.CreateOperatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_CreateOperatorRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_DeleteAnalysisRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.DeleteAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_DeleteAnalysisRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_DeleteOperatorRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.DeleteOperatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_DeleteOperatorRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_GetAnalysisRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.GetAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_GetAnalysisRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_GetOperatorRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.GetOperatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_GetOperatorRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListAnalysesRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListAnalysesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListAnalysesRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListAnalysesResponse(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListAnalysesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListAnalysesResponse(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListOperatorsRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListOperatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListOperatorsRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListOperatorsResponse(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListOperatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListOperatorsResponse(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_Operator(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_resources_pb.Operator)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.Operator');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_Operator(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_resources_pb.Operator.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_UpdateAnalysisRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.UpdateAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_UpdateAnalysisRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_UpdateOperatorRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.UpdateOperatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_UpdateOperatorRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service describing handlers for resources. The service enables clients to run
// Live Video Analytics (LVA) on the streaming inputs.
var LiveVideoAnalyticsService = exports.LiveVideoAnalyticsService = {
  // Lists Operators in a given project and location.
listOperators: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/ListOperators',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsRequest,
    responseType: google_cloud_visionai_v1alpha1_lva_service_pb.ListOperatorsResponse,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_ListOperatorsRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListOperatorsRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_ListOperatorsResponse,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListOperatorsResponse,
  },
  // Gets details of a single Operator.
getOperator: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/GetOperator',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.GetOperatorRequest,
    responseType: google_cloud_visionai_v1alpha1_lva_resources_pb.Operator,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_GetOperatorRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_GetOperatorRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_Operator,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_Operator,
  },
  // Creates a new Operator in a given project and location.
createOperator: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/CreateOperator',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.CreateOperatorRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_CreateOperatorRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_CreateOperatorRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the parameters of a single Operator.
updateOperator: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/UpdateOperator',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateOperatorRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_UpdateOperatorRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_UpdateOperatorRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a single Operator.
deleteOperator: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/DeleteOperator',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteOperatorRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_DeleteOperatorRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_DeleteOperatorRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists Analyses in a given project and location.
listAnalyses: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/ListAnalyses',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesRequest,
    responseType: google_cloud_visionai_v1alpha1_lva_service_pb.ListAnalysesResponse,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_ListAnalysesRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListAnalysesRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_ListAnalysesResponse,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListAnalysesResponse,
  },
  // Gets details of a single Analysis.
getAnalysis: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/GetAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.GetAnalysisRequest,
    responseType: google_cloud_visionai_v1alpha1_lva_resources_pb.Analysis,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_GetAnalysisRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_GetAnalysisRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_Analysis,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_Analysis,
  },
  // Creates a new Analysis in a given project and location.
createAnalysis: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/CreateAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.CreateAnalysisRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_CreateAnalysisRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_CreateAnalysisRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the parameters of a single Analysis.
updateAnalysis: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/UpdateAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.UpdateAnalysisRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_UpdateAnalysisRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_UpdateAnalysisRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a single Analysis.
deleteAnalysis: {
    path: '/google.cloud.visionai.v1alpha1.LiveVideoAnalytics/DeleteAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_lva_service_pb.DeleteAnalysisRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_DeleteAnalysisRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_DeleteAnalysisRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.LiveVideoAnalyticsClient = grpc.makeGenericClientConstructor(LiveVideoAnalyticsService);

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
var google_cloud_visionai_v1alpha1_streams_service_pb = require('../../../../google/cloud/visionai/v1alpha1/streams_service_pb.js');
var google_cloud_visionai_v1alpha1_common_pb = require('../../../../google/cloud/visionai/v1alpha1/common_pb.js');
var google_cloud_visionai_v1alpha1_streams_resources_pb = require('../../../../google/cloud/visionai/v1alpha1/streams_resources_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_visionai_v1alpha1_Cluster(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_common_pb.Cluster)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.Cluster');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_Cluster(buffer_arg) {
  return google_cloud_visionai_v1alpha1_common_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_CreateClusterRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.CreateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_CreateClusterRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_CreateEventRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.CreateEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_CreateEventRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_CreateSeriesRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.CreateSeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_CreateSeriesRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_CreateStreamRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.CreateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_CreateStreamRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_DeleteClusterRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.DeleteClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_DeleteClusterRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_DeleteEventRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.DeleteEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_DeleteEventRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_DeleteSeriesRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.DeleteSeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_DeleteSeriesRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_DeleteStreamRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.DeleteStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_DeleteStreamRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_Event(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_resources_pb.Event)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_Event(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_resources_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_GetClusterRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.GetClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_GetClusterRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_GetEventRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.GetEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_GetEventRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_GetSeriesRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.GetSeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_GetSeriesRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_GetStreamRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.GetStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_GetStreamRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_GetStreamThumbnailRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.GetStreamThumbnailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_GetStreamThumbnailRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListClustersRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListClustersRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListClustersResponse(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListClustersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListClustersResponse(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListEventsRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListEventsRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListEventsResponse(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListEventsResponse(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListSeriesRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListSeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListSeriesRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListSeriesResponse(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListSeriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListSeriesResponse(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListStreamsRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListStreamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListStreamsRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_ListStreamsResponse(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.ListStreamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_ListStreamsResponse(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_Series(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_resources_pb.Series)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.Series');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_Series(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_resources_pb.Series.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_Stream(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_resources_pb.Stream)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.Stream');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_Stream(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_resources_pb.Stream.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_UpdateClusterRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.UpdateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_UpdateClusterRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_UpdateEventRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.UpdateEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_UpdateEventRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_UpdateSeriesRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.UpdateSeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_UpdateSeriesRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_visionai_v1alpha1_UpdateStreamRequest(arg) {
  if (!(arg instanceof google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest)) {
    throw new Error('Expected argument of type google.cloud.visionai.v1alpha1.UpdateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_visionai_v1alpha1_UpdateStreamRequest(buffer_arg) {
  return google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service describing handlers for resources.
// Vision API and Vision AI API are two independent APIs developed by the same
// team. Vision API is for people to annotate their image while Vision AI is an
// e2e solution for customer to build their own computer vision application.
var StreamsServiceService = exports.StreamsServiceService = {
  // Lists Clusters in a given project and location.
listClusters: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/ListClusters',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersRequest,
    responseType: google_cloud_visionai_v1alpha1_streams_service_pb.ListClustersResponse,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_ListClustersRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListClustersRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_ListClustersResponse,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListClustersResponse,
  },
  // Gets details of a single Cluster.
getCluster: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/GetCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.GetClusterRequest,
    responseType: google_cloud_visionai_v1alpha1_common_pb.Cluster,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_GetClusterRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_GetClusterRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_Cluster,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_Cluster,
  },
  // Creates a new Cluster in a given project and location.
createCluster: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/CreateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.CreateClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_CreateClusterRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_CreateClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the parameters of a single Cluster.
updateCluster: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/UpdateCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_UpdateClusterRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_UpdateClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a single Cluster.
deleteCluster: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/DeleteCluster',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteClusterRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_DeleteClusterRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_DeleteClusterRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists Streams in a given project and location.
listStreams: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/ListStreams',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsRequest,
    responseType: google_cloud_visionai_v1alpha1_streams_service_pb.ListStreamsResponse,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_ListStreamsRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListStreamsRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_ListStreamsResponse,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListStreamsResponse,
  },
  // Gets details of a single Stream.
getStream: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/GetStream',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamRequest,
    responseType: google_cloud_visionai_v1alpha1_streams_resources_pb.Stream,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_GetStreamRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_GetStreamRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_Stream,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_Stream,
  },
  // Creates a new Stream in a given project and location.
createStream: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/CreateStream',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.CreateStreamRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_CreateStreamRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_CreateStreamRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the parameters of a single Stream.
updateStream: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/UpdateStream',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateStreamRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_UpdateStreamRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_UpdateStreamRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a single Stream.
deleteStream: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/DeleteStream',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteStreamRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_DeleteStreamRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_DeleteStreamRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets the thumbnail (image snapshot) of a single Stream.
getStreamThumbnail: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/GetStreamThumbnail',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.GetStreamThumbnailRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_GetStreamThumbnailRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_GetStreamThumbnailRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists Events in a given project and location.
listEvents: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/ListEvents',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsRequest,
    responseType: google_cloud_visionai_v1alpha1_streams_service_pb.ListEventsResponse,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_ListEventsRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListEventsRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_ListEventsResponse,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListEventsResponse,
  },
  // Gets details of a single Event.
getEvent: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/GetEvent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.GetEventRequest,
    responseType: google_cloud_visionai_v1alpha1_streams_resources_pb.Event,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_GetEventRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_GetEventRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_Event,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_Event,
  },
  // Creates a new Event in a given project and location.
createEvent: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/CreateEvent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.CreateEventRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_CreateEventRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_CreateEventRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the parameters of a single Event.
updateEvent: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/UpdateEvent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateEventRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_UpdateEventRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_UpdateEventRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a single Event.
deleteEvent: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/DeleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteEventRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_DeleteEventRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_DeleteEventRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists Series in a given project and location.
listSeries: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/ListSeries',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesRequest,
    responseType: google_cloud_visionai_v1alpha1_streams_service_pb.ListSeriesResponse,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_ListSeriesRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListSeriesRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_ListSeriesResponse,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_ListSeriesResponse,
  },
  // Gets details of a single Series.
getSeries: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/GetSeries',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.GetSeriesRequest,
    responseType: google_cloud_visionai_v1alpha1_streams_resources_pb.Series,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_GetSeriesRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_GetSeriesRequest,
    responseSerialize: serialize_google_cloud_visionai_v1alpha1_Series,
    responseDeserialize: deserialize_google_cloud_visionai_v1alpha1_Series,
  },
  // Creates a new Series in a given project and location.
createSeries: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/CreateSeries',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.CreateSeriesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_CreateSeriesRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_CreateSeriesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the parameters of a single Event.
updateSeries: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/UpdateSeries',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.UpdateSeriesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_UpdateSeriesRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_UpdateSeriesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a single Series.
deleteSeries: {
    path: '/google.cloud.visionai.v1alpha1.StreamsService/DeleteSeries',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_visionai_v1alpha1_streams_service_pb.DeleteSeriesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_visionai_v1alpha1_DeleteSeriesRequest,
    requestDeserialize: deserialize_google_cloud_visionai_v1alpha1_DeleteSeriesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.StreamsServiceClient = grpc.makeGenericClientConstructor(StreamsServiceService);

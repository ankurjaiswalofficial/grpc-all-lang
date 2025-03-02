// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_service_pb = require('./chat_service_pb.js');

function serialize_chat_GetOnlineStatusResponse(arg) {
  if (!(arg instanceof chat_service_pb.GetOnlineStatusResponse)) {
    throw new Error('Expected argument of type chat.GetOnlineStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_GetOnlineStatusResponse(buffer_arg) {
  return chat_service_pb.GetOnlineStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_GetUserRequest(arg) {
  if (!(arg instanceof chat_service_pb.GetUserRequest)) {
    throw new Error('Expected argument of type chat.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_GetUserRequest(buffer_arg) {
  return chat_service_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_SetOnlineStatusRequest(arg) {
  if (!(arg instanceof chat_service_pb.SetOnlineStatusRequest)) {
    throw new Error('Expected argument of type chat.SetOnlineStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_SetOnlineStatusRequest(buffer_arg) {
  return chat_service_pb.SetOnlineStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_SetOnlineStatusResponse(arg) {
  if (!(arg instanceof chat_service_pb.SetOnlineStatusResponse)) {
    throw new Error('Expected argument of type chat.SetOnlineStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_SetOnlineStatusResponse(buffer_arg) {
  return chat_service_pb.SetOnlineStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  // Get RPCs
getOnlineStatus: {
    path: '/chat.ChatService/GetOnlineStatus',
    requestStream: false,
    responseStream: false,
    requestType: chat_service_pb.GetUserRequest,
    responseType: chat_service_pb.GetOnlineStatusResponse,
    requestSerialize: serialize_chat_GetUserRequest,
    requestDeserialize: deserialize_chat_GetUserRequest,
    responseSerialize: serialize_chat_GetOnlineStatusResponse,
    responseDeserialize: deserialize_chat_GetOnlineStatusResponse,
  },
  // Set RPCs
setOnlineStatus: {
    path: '/chat.ChatService/SetOnlineStatus',
    requestStream: false,
    responseStream: false,
    requestType: chat_service_pb.SetOnlineStatusRequest,
    responseType: chat_service_pb.SetOnlineStatusResponse,
    requestSerialize: serialize_chat_SetOnlineStatusRequest,
    requestDeserialize: deserialize_chat_SetOnlineStatusRequest,
    responseSerialize: serialize_chat_SetOnlineStatusResponse,
    responseDeserialize: deserialize_chat_SetOnlineStatusResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);

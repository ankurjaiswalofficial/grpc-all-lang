// package: chat
// file: chat_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chat_service_pb from "./chat_service_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOnlineStatus: IChatServiceService_IGetOnlineStatus;
    setOnlineStatus: IChatServiceService_ISetOnlineStatus;
}

interface IChatServiceService_IGetOnlineStatus extends grpc.MethodDefinition<chat_service_pb.GetUserRequest, chat_service_pb.GetOnlineStatusResponse> {
    path: "/chat.ChatService/GetOnlineStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.GetOnlineStatusResponse>;
    responseDeserialize: grpc.deserialize<chat_service_pb.GetOnlineStatusResponse>;
}
interface IChatServiceService_ISetOnlineStatus extends grpc.MethodDefinition<chat_service_pb.SetOnlineStatusRequest, chat_service_pb.SetOnlineStatusResponse> {
    path: "/chat.ChatService/SetOnlineStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.SetOnlineStatusRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.SetOnlineStatusRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.SetOnlineStatusResponse>;
    responseDeserialize: grpc.deserialize<chat_service_pb.SetOnlineStatusResponse>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer {
    getOnlineStatus: grpc.handleUnaryCall<chat_service_pb.GetUserRequest, chat_service_pb.GetOnlineStatusResponse>;
    setOnlineStatus: grpc.handleUnaryCall<chat_service_pb.SetOnlineStatusRequest, chat_service_pb.SetOnlineStatusResponse>;
}

export interface IChatServiceClient {
    getOnlineStatus(request: chat_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.GetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    getOnlineStatus(request: chat_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.GetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    getOnlineStatus(request: chat_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.GetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    setOnlineStatus(request: chat_service_pb.SetOnlineStatusRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.SetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    setOnlineStatus(request: chat_service_pb.SetOnlineStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.SetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    setOnlineStatus(request: chat_service_pb.SetOnlineStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.SetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOnlineStatus(request: chat_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.GetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    public getOnlineStatus(request: chat_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.GetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    public getOnlineStatus(request: chat_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.GetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    public setOnlineStatus(request: chat_service_pb.SetOnlineStatusRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.SetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    public setOnlineStatus(request: chat_service_pb.SetOnlineStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.SetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
    public setOnlineStatus(request: chat_service_pb.SetOnlineStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.SetOnlineStatusResponse) => void): grpc.ClientUnaryCall;
}

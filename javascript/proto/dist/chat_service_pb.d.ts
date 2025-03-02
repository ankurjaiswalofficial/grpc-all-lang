// package: chat
// file: chat_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SetOnlineStatusResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): SetOnlineStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOnlineStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetOnlineStatusResponse): SetOnlineStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOnlineStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOnlineStatusResponse;
    static deserializeBinaryFromReader(message: SetOnlineStatusResponse, reader: jspb.BinaryReader): SetOnlineStatusResponse;
}

export namespace SetOnlineStatusResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class SetOnlineStatusRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): SetOnlineStatusRequest;
    getStatus(): number;
    setStatus(value: number): SetOnlineStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOnlineStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetOnlineStatusRequest): SetOnlineStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOnlineStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOnlineStatusRequest;
    static deserializeBinaryFromReader(message: SetOnlineStatusRequest, reader: jspb.BinaryReader): SetOnlineStatusRequest;
}

export namespace SetOnlineStatusRequest {
    export type AsObject = {
        userId: string,
        status: number,
    }
}

export class GetUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetOnlineStatusResponse extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): GetOnlineStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOnlineStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOnlineStatusResponse): GetOnlineStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOnlineStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOnlineStatusResponse;
    static deserializeBinaryFromReader(message: GetOnlineStatusResponse, reader: jspb.BinaryReader): GetOnlineStatusResponse;
}

export namespace GetOnlineStatusResponse {
    export type AsObject = {
        status: number,
    }
}

import { Status } from "@grpc/grpc-js/build/src/constants";
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import {
    SetOnlineStatusRequest,
    SetOnlineStatusResponse,
    GetOnlineStatusResponse,
    GetUserRequest,
} from "../proto/dist/chat_service_pb";


async function SetOnlineStatus(
    call: ServerUnaryCall<SetOnlineStatusRequest, SetOnlineStatusResponse>,
    callback: sendUnaryData<SetOnlineStatusResponse>,
): Promise<void> {
    const req = call.request;

    try {
        console.log("SetOnlineStatus Request data:", req.getUserId(), req.getStatus());
        const resp = new SetOnlineStatusResponse();
        resp.setSuccess(true);
        console.log("SetOnlineStatus Response: ", resp.getSuccess());
        callback(null, resp);
    } catch (error) {
        console.error("Error in SetOnlineStatus:", error);
        callback(
            {
                code: Status.INTERNAL,
                message: "Failed to SetOnlineStatus",
            },
            null,
        );
    }
}
async function GetOnlineStatus(
    call: ServerUnaryCall<GetUserRequest, GetOnlineStatusResponse>,
    callback: sendUnaryData<GetOnlineStatusResponse>,
): Promise<void> {
    const req = call.request;

    try {
        console.log("GetOnlineStatus Request data:", req.getUserId());
        const resp = new GetOnlineStatusResponse();
        resp.setStatus(1);
        console.log("GetOnlineStatus Response: ", resp.getStatus());
        callback(null, resp);
    } catch (error) {
        console.error("Error in GetOnlineStatus:", error);
        callback(
            {
                code: Status.INTERNAL,
                message: "Failed to GetOnlineStatus",
            },
            null,
        );
    }
}

export {SetOnlineStatus, GetOnlineStatus};

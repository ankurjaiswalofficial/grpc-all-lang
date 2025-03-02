import * as grpc from "@grpc/grpc-js";
import {
  ChatServiceService,
  IChatServiceServer,
} from "../proto/dist/chat_service_grpc_pb";
import {SetOnlineStatus, GetOnlineStatus} from "./services/OnlineStatus";

async function startServer() {
  const server = new grpc.Server();

  const chatServiceImplementation: IChatServiceServer = {
    setOnlineStatus: SetOnlineStatus,
    getOnlineStatus: GetOnlineStatus,
  };

  server.addService(
    ChatServiceService as unknown as grpc.ServiceDefinition,
    chatServiceImplementation as unknown as grpc.UntypedServiceImplementation,
  );

  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`gRPC server running on port ${port}`);
      server.start();
    },
  );
}

startServer();

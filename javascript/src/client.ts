// This is a sample client code to use else use postman to test this grpc nide server

import * as grpc from "@grpc/grpc-js";
import { ChatServiceClient } from "../proto/dist/chat_service_grpc_pb";

const client = new ChatServiceClient(
  "localhost:50051",
  grpc.ChannelCredentials.createInsecure(),
);

export { client };

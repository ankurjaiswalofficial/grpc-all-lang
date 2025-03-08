# gRPC TypeScript Example

This example demonstrates how to create a gRPC client and server in TypeScript.

## Prerequisites

- Node.js
- `grpc-tools`, `grpc_tools_node_protoc_ts`, `@grpc/grpc-js`, and `@grpc/proto-loader` packages

Install the required packages using npm:

```sh
npm install grpc-tools grpc_tools_node_protoc_ts @grpc/grpc-js @grpc/proto-loader
```

## Generate gRPC Code

Generate the TypeScript code from the `.proto` file:

```sh
npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../generated --grpc_out=../generated --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin ../protos/service.proto
npx grpc_tools_node_protoc --ts_out=../generated --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts ../protos/service.proto
```

## Running the Server

Start the gRPC server:

```sh
ts-node server.ts
```

The server will start on port `50051`.

## Running the Client

Run the gRPC client:

```sh
ts-node client.ts
```

The client will connect to the server and make a request to the `SayHello` method.

## File Structure

```
grpc-all-lang/
├── generated/
│   ├── service_pb.js
│   ├── service_pb.d.ts
│   ├── service_grpc_pb.js
│   └── service_grpc_pb.d.ts
├── protos/
│   └── service.proto
├── typescript/
│   ├── client.ts
│   ├── server.ts
│   └── README.md
```

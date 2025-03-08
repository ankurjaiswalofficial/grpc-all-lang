# gRPC Python Example

This example demonstrates how to create a gRPC client and server in Python.

## Prerequisites

- Python 3.6+
- `grpcio` and `grpcio-tools` packages

Install the required packages using pip:

```sh
pip install grpcio grpcio-tools
```

## Generate gRPC Code

Generate the Python code from the `.proto` file:

```sh
python -m grpc_tools.protoc -I=../protos --python_out=../generated --grpc_python_out=../generated ../protos/service.proto
```

## Running the Server

Start the gRPC server:

```sh
python server.py
```

The server will start on port `50051`.

## Running the Client

Run the gRPC client:

```sh
python client.py
```

The client will connect to the server and make a request to the `SayHello` method.

## File Structure

```
grpc-all-lang/
├── generated/
│   ├── service_pb2.py
│   └── service_pb2_grpc.py
├── protos/
│   └── service.proto
├── python/
│   ├── client.py
│   ├── server.py
│   └── README.md
```

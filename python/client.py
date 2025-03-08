import grpc
from generated import service_pb2
from generated import service_pb2_grpc

def run():
    # Create a channel
    with grpc.insecure_channel('localhost:50051') as channel:
        # Create a stub (client)
        stub = service_pb2_grpc.MyServiceStub(channel)
        # Create a request
        request = service_pb2.HelloRequest(name='World')
        # Make the call
        response = stub.SayHello(request)
        print("Client received: " + response.message)

if __name__ == '__main__':
    run()

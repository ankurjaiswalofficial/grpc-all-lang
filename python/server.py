from concurrent import futures
import grpc
from generated import service_pb2
from generated import service_pb2_grpc

class MyService(service_pb2_grpc.MyServiceServicer):
    def SayHello(self, request, context):
        response = service_pb2.HelloResponse()
        response.message = f'Hello, {request.name}!'
        return response

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    service_pb2_grpc.add_MyServiceServicer_to_server(MyService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()

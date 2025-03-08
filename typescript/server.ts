import * as grpc from '@grpc/grpc-js';
import { HelloRequest, HelloResponse } from './protos/dist/service_pb';
import { IMyServiceServer, MyServiceService } from './protos/dist/service_grpc_pb';

class MyService implements IMyServiceServer {
    sayHello(call: grpc.ServerUnaryCall<HelloRequest, HelloResponse>, callback: grpc.sendUnaryData<HelloResponse>): void {
        const response = new HelloResponse();
        response.setMessage(`Hello, ${call.request.getName()}!`);
        callback(null, response);
    }
}

function main() {
    const server = new grpc.Server();
    server.addService(MyServiceService, new MyService());
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('Server running at http://0.0.0.0:50051');
    });
}

main();

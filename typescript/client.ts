import * as grpc from '@grpc/grpc-js';
import { HelloRequest, HelloResponse } from './protos/dist/generated/service_pb';
import { MyServiceClient } from './protos/dist/service_grpc_pb';

function main() {
    const client = new MyServiceClient('localhost:50051', grpc.credentials.createInsecure());

    const request = new HelloRequest();
    request.setName('World');

    client.sayHello(request, (err: grpc.ServiceError | null, response: HelloResponse) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Client received: ' + response.getMessage());
    });
}

main();

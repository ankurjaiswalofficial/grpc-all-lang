const assert = require('chai').assert;
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

describe('Basic Tests', function() {
    it('should return true when the value is true', function() {
        assert.isTrue(true);
    });

    it('should return false when the value is false', function() {
        assert.isFalse(false);
    });

    it('should return the correct sum', function() {
        const sum = (a, b) => a + b;
        assert.equal(sum(2, 3), 5);
    });

    it('should return the correct length of the array', function() {
        const arr = [1, 2, 3, 4];
        assert.lengthOf(arr, 4);
    });
});

describe('gRPC Tests', function() {
    let client;

    before(function() {
        const PROTO_PATH = path.resolve(__dirname, '../proto/src/helloworld.proto');
        const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });
        const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;
        client = new helloProto.Greeter('localhost:50051', grpc.credentials.createInsecure());
    });

    it('should return a greeting from the server', function(done) {
        client.sayHello({ name: 'World' }, function(err, response) {
            if (err) return done(err);
            assert.equal(response.message, 'Hello World');
            done();
        });
    });

    it('should handle server error correctly', function(done) {
        client.sayHello({ name: '' }, function(err, response) {
            assert.isNotNull(err);
            done();
        });
    });
});

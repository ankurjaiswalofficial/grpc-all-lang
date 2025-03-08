# JavaScript gRPC Codebase

This repository contains the JavaScript implementation of gRPC services. It includes client and server code, along with examples and tests.

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/grpc-all-lang.git
    cd grpc-all-lang/javascript
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Server

To start the gRPC server, run:
```sh
npm run start:server
```

### Running the Client

To start the gRPC client, run:
```sh
npm run start:client
```

## Project Structure

- `src/`: Contains the source code for the gRPC client and server.
- `protos/`: Contains the `.proto` files defining the gRPC services and messages.
- `tests/`: Contains the test cases for the gRPC services.

## Scripts

- `start:server`: Starts the gRPC server.
- `start:client`: Starts the gRPC client.
- `test`: Runs the test suite.

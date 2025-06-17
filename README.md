# Envio Indexer

A blockchain indexer project built with Envio, providing GraphQL API access to blockchain data.

## Overview

This project uses [Envio](https://envio.dev) to index blockchain data and expose it through a GraphQL API. It allows you to query blockchain data in a structured and efficient way.

## Features

- GraphQL API for querying blockchain data
- Real-time data indexing
- Type-safe development with TypeScript
- Automated code generation from schema
- Testing suite with Mocha and Chai

## Configured Contracts

The following contracts are currently configured for indexing:

### Ambient
- Addresses:
  - `0x88B96aF200c8a9c35442C8AC6cd3D22695AaE4F0`
  - `0x1C74Dd2DF010657510715244DA10ba19D1F3D2B7`
  - `0x70a6a0C905af5737aD73Ceba4e6158e995031d4B`
- Tracks events like AuthorityTransfer, CrocSwap, CrocWarmCmd, and more

### Castora
- Address: `0xa0742C672e713327b0D6A4BfF34bBb4cbb319C53`
- Tracks prediction market events like ClaimedWinnings, CreatedPool, Predicted

### Clober
- Address: `0xfD845859628946B317A78A9250DA251114FbD846`
- Tracks swap and router events

### Dusted
- Address: `0x18C9534dfe16a0314B66395F48549716FfF9AA66`
- Tracks claim and withdrawal events

### Enjoyoors
- Address: `0x9FacfE94E5f0AD42672eC75a348a376B13Da86e1`
- Tracks deposit, withdrawal, and token management events

### Kuru
- Address: `0x4B186949F31FCA0aD08497Df9169a6bEbF0e26ef`
- Tracks deposit and withdrawal events

### Madness
- Address: `0xC8527e96c3CB9522f6E35e95C0A28feAb8144f15`
- Tracks token transfer and blacklist events

### Magma
- Address: `0x2c9C959516e9AAEdB2C748224a41249202ca8BE7`
- Tracks deposit and withdraw events

### Monad2048
- Address: `0xe0FA8195AE92b9C473c0c0c12c2D6bCbd245De47`
- Tracks game events like NewGame and NewMove

### Monorail
- Address: `0x7B5dF408da2356e9Eecda0492104E758A2B6913d`
- Tracks aggregation and fee events

### MonTools
- Address: `0xf7005a4D86d277A1D43CB49D05660d20c24d79f2`
- Tracks batch transfer events

### RugRumble
- Address: `0x262Fd7A243e9335A733c00de471525D9FeE8Abdb`
- Tracks game events like GameEnded, GameSet, GameStarted

### SwingMonad
- Address: `0xaf38734983a68eDFA4C1d6DB403dfa28bbf4009a`
- Tracks deposit and withdraw events

### ZkSwap
- Address: `0xa29812968fCC0c34bF89926A22939CafCe02C639`
- Tracks NFT and liquidity events

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/current) (v18 or newer)
- [pnpm](https://pnpm.io/installation) (v8 or newer)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

### Development

To start the development server:
```bash
pnpm dev
```

Visit http://localhost:8080 to access the GraphQL Playground. The local password is `testing`.

### Code Generation

Generate TypeScript types and other files from your configuration:
```bash
pnpm codegen
```

### Testing

Run the test suite:
```bash
pnpm test
```

## Project Structure

- `src/` - Source code directory
- `test/` - Test files
- `generated/` - Auto-generated files
- `schema.graphql` - GraphQL schema definition
- `config.yaml` - Envio configuration file

## Documentation

For detailed documentation about Envio features and configuration, please visit the [official documentation website](https://docs.envio.dev).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Setting up and running EUI locally

The below instructions run EUI's [documentation site](https://elastic.github.io/eui/) locally, with any changes made in `src/` reflected. On local, EUI's favicon will be gray instead of colored.

## Set up

### Node

We depend upon the version of node defined in [.nvmrc](../../.nvmrc).

You will probably want to install a node version manager. [nvm](https://github.com/creationix/nvm) is recommended.

To install and use the correct node version with `nvm`:

```bash
nvm install
```

### Dependencies

To install all dependencies:

```bash
yarn
```

EUI currently uses only `yarn` for dependency management. We use `npm` for release purposes only.

## Running

You can run the documentation locally at [http://localhost:8030/](http://localhost:8030/) with the following command:

```bash
yarn start
```

If another process is already listening on port 8030, the next free port will be used. Alternatively, you can specify a port:

```bash
yarn start --port 9000
```

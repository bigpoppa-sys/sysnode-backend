const { SyscoinRpcClient, rpcServices } = require("@syscoin/syscoin-js");

const config = {
  host: process.env.SYSCOIN_RPC_HOST || "127.0.0.1",
  rpcPort: Number(process.env.SYSCOIN_RPC_PORT || 8370),
  username: process.env.SYSCOIN_RPC_USER,
  password: process.env.SYSCOIN_RPC_PASSWORD,
  logLevel: process.env.SYSCOIN_RPC_LOG_LEVEL || "error"
};

if (!config.username || !config.password) {
  throw new Error("Missing SYSCOIN_RPC_USER or SYSCOIN_RPC_PASSWORD environment variable.");
}

const client = new SyscoinRpcClient(config);

module.exports = {
  client,
  rpcServices
};

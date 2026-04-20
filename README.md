# Sysnode Backend

Open-source API service for the Sysnode.info dashboard. It reads live Syscoin data from a local Syscoin Core RPC node, enriches it with market and location context, and exposes JSON endpoints for Sentry Node, governance, reward, chain, and market views.

## What It Provides

- Live Sentry Node network statistics.
- Governance proposal data from Syscoin RPC.
- Reward, ROI, payout cadence, and locked supply calculations.
- Syscoin market data from CoinGecko.
- Country-level Sentry Node distribution data.
- Optional historical node count data from a CSV source.

## Requirements

- Node.js 20 or newer.
- npm 10 or newer.
- A synced Syscoin Core node with RPC enabled.
- RPC credentials configured locally through environment variables.

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

Edit `.env` with your local Syscoin RPC settings:

```bash
SYSCOIN_RPC_HOST=127.0.0.1
SYSCOIN_RPC_PORT=8370
SYSCOIN_RPC_USER=your-rpc-user
SYSCOIN_RPC_PASSWORD=your-rpc-password
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/health` | Basic service health check. |
| `GET` | `/mnStats` | Aggregated network, reward, chain, market, superblock, and map data. |
| `POST` | `/govlist` | Current Syscoin governance proposals. |
| `GET` | `/mnList` | Raw Sentry Node list from Syscoin RPC. |
| `POST` | `/mnSearch` | Paginated Sentry Node search. |
| `GET` | `/mnCount` | Historical node count data from `MN_COUNT_CSV_PATH`. |

## Configuration

See `.env.example` for supported environment variables.

| Variable | Purpose |
| --- | --- |
| `PORT` | HTTP port for the Express server. |
| `CORS_ORIGIN` | Allowed CORS origin. Use `*` for public read-only access. |
| `SYSCOIN_RPC_HOST` | Syscoin Core RPC host. |
| `SYSCOIN_RPC_PORT` | Syscoin Core RPC port. |
| `SYSCOIN_RPC_USER` | Syscoin Core RPC username. |
| `SYSCOIN_RPC_PASSWORD` | Syscoin Core RPC password. |
| `SYSCOIN_RPC_LOG_LEVEL` | RPC client log level. |
| `MN_COUNT_CSV_PATH` | Optional CSV file path used by `/mnCount`. |

## Production Notes

The app can run under any Node process manager. A PM2 example is included in `ecosystem.config.js`.

```bash
npm ci --omit=dev
pm2 start ecosystem.config.js
```

## Contributing

Issues and pull requests are welcome. Please keep changes focused, avoid committing generated files, and include clear notes when changing API response shapes used by the frontend.

## License

MIT

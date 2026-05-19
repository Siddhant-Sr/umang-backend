### 4. Secrets & How to Generate Them

Below are explanations for the main secret environment variables and how to generate them securely:

| Variable             | Description                                                                 | How to Generate                                                      |
|----------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------|
| `APP_KEYS`           | Comma-separated keys for signing cookies and sessions.                      | Generate 4+ random base64 strings (e.g., `openssl rand -base64 32`) |
| `API_TOKEN_SALT`     | Salt used for hashing API tokens.                                           | Generate a random base64 string (e.g., `openssl rand -base64 32`)   |
| `ADMIN_JWT_SECRET`   | Secret for signing admin panel JWT tokens.                                  | Generate a random base64 string (e.g., `openssl rand -base64 32`)   |
| `TRANSFER_TOKEN_SALT`| Salt for secure transfer tokens (used in data transfer/import/export).      | Generate a random base64 string (e.g., `openssl rand -base64 32`)   |
| `ENCRYPTION_KEY`     | Key for encrypting sensitive data.                                          | Generate a random base64 string (e.g., `openssl rand -base64 32`)   |
| `JWT_SECRET`         | Secret for signing user JWT tokens (API authentication).                    | Generate a random base64 string (e.g., `openssl rand -base64 32`)   |

**How to generate a secure value:**

On Linux/macOS/WSL:
```sh
openssl rand -base64 32
```
On Windows (PowerShell):
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**Never share or commit these secrets to public repositories.**

# 🚀 Getting started with Strapi

## 🏭 Production Deployment Guide

This section provides all necessary steps, commands, and environment variables required to deploy this Strapi backend in a production environment.

### 1. Required Environment Variables

Set the following environment variables in your production environment (e.g., in a `.env` file or your hosting provider's environment settings):

| Variable                | Required | Description                                                                 |
|-------------------------|----------|-----------------------------------------------------------------------------|
| `HOST`                  | Yes      | Host address to bind the server (default: `0.0.0.0`)                        |
| `PORT`                  | Yes      | Port to run the server (default: `1337`)                                    |
| `APP_KEYS`              | Yes      | Comma-separated list of app keys for session & cookie signing                |
| `API_TOKEN_SALT`        | Yes      | Salt for API tokens                                                         |
| `ADMIN_JWT_SECRET`      | Yes      | Secret for admin JWT authentication                                         |
| `TRANSFER_TOKEN_SALT`   | Yes      | Salt for transfer tokens                                                    |
| `JWT_SECRET`            | Yes      | Secret for user JWT authentication                                          |
| `ENCRYPTION_KEY`        | Yes      | Key for data encryption                                                     |
| `DATABASE_CLIENT`       | Yes      | Database client: `postgres`, `mysql`, or `sqlite`                           |
| `DATABASE_HOST`         | Yes*     | Database host (required for `postgres`/`mysql`)                             |
| `DATABASE_PORT`         | Yes*     | Database port (required for `postgres`/`mysql`)                             |
| `DATABASE_NAME`         | Yes*     | Database name (required for `postgres`/`mysql`)                             |
| `DATABASE_USERNAME`     | Yes*     | Database username (required for `postgres`/`mysql`)                         |
| `DATABASE_PASSWORD`     | Yes*     | Database password (required for `postgres`/`mysql`)                         |
| `DATABASE_URL`          | Optional | Full DB connection string (for `postgres`)                                  |
| `DATABASE_SSL`          | Optional | Enable SSL for DB connection (`true`/`false`)                               |
| `DATABASE_SCHEMA`       | Optional | DB schema (for `postgres`, default: `public`)                               |
| `DATABASE_FILENAME`     | Yes*     | SQLite DB file path (required for `sqlite`)                                 |

\* Only required for the selected database client.

### 2. Production Build & Start Commands

Run these commands in your production environment:

```sh
# Install dependencies
npm install

# Build the admin panel (must be done before starting in prod)
npm run build

# Start the server in production mode
npm run start
```

### 3. Additional Notes

- **Never expose your secrets** (such as JWT, API salts, encryption keys) in public repositories.
- Ensure your database is properly secured and accessible from your server.
- For cloud/VM deployments, set environment variables using your provider's dashboard or secret manager.
- For Docker deployments, pass environment variables in your Dockerfile or docker-compose file.
- For more details, see the [Strapi deployment documentation](https://docs.strapi.io/dev-docs/deployment).

---

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

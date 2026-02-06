# CLI Template

A minimal TypeScript CLI starter with ESLint, Prettier, Vitest, Changesets, and GitHub Actions publishing.

## Setup

Clone this repo, then follow the steps below to turn it into your own CLI.

### 1. Update `package.json`

- **`name`** — change `@maplab/cli-template` to your package name (e.g. `@yourorg/mytool` or just `mytool`)
- **`description`** — describe your CLI
- **`bin`** — change the `mycli` key to your CLI command name (this is what users type in their terminal)
- **`author`** — add yourself
- **`keywords`** — replace with relevant keywords
- **`version`** — leave at `0.0.1`, changesets will manage this going forward
- **`publishConfig.access`** — set to `"restricted"` if this is a private package

### 2. Update `src/index.ts`

- Change `.name("mycli")` to match whatever you set in `bin` above
- Change `.description(...)` to describe your CLI
- Replace the example `hello` command with your own commands

### 3. Update `.changeset/config.json`

- **`baseBranch`** — change if your default branch isn't `main`

### 4. Set up GitHub secrets (for publishing)

The release workflow needs these repository secrets:

- **`NPM_TOKEN`** — an npm access token with publish permissions

### 5. Update `AGENTS.md`

Replace the template description with context about your project.

### 6. Delete this README

Or replace it with your own.

### 7. Clean git history

```bash
rm -rf .git
git init
git add -A
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

## Development

```bash
pnpm install        # install dependencies
pnpm dev            # run with tsx (hot reload)
pnpm build          # compile TypeScript
pnpm lint           # check linting
pnpm lint:fix       # auto-fix lint issues
pnpm test           # run tests
pnpm test:watch     # run tests in watch mode
```

## Releasing

```bash
pnpm changeset      # create a changeset describing your changes
```

Commit and push. On merge to `main`, the GitHub Action will create a "Version Packages" PR. Merging that PR publishes to npm automatically.

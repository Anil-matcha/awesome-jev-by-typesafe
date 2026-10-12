# Contributing

1. Add the proprietary tool (or a new alternative to an existing tool) in `data.json`.
2. Each alternative needs: `name`, `repo` (`owner/name`, or `null` plus `url`), `license`, and a one-line `description`.
3. Only list projects that are genuinely usable alternatives and actively maintained.
4. Run `node scripts/build-readme.mjs` and commit both `data.json` and the regenerated `README.md`.

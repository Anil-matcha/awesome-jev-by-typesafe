// Generates README.md from data.json + stats.json.
// Usage: node scripts/build-readme.mjs
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const tools = JSON.parse(await readFile(new URL("data.json", root), "utf8"));
const stats = JSON.parse(await readFile(new URL("stats.json", root), "utf8"));

const fmt = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n));
const anchor = (s) => s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

const byCategory = {};
for (const t of tools) (byCategory[t.category] ||= []).push(t);
const categories = Object.keys(byCategory).sort();

const rows = (t) =>
  t.alternatives
    .map((a) => {
      const s = a.repo ? stats[a.repo] : null;
      const link = a.repo ? `https://github.com/${a.repo}` : a.url;
      const stars = s?.stars != null ? `★ ${fmt(s.stars)}` : "";
      const license = s?.license || a.license;
      return `| [${a.name}](${link}) | ${a.description} | ${license} | ${stars} |`;
    })
    .join("\n");

let out = `# Awesome Open Source Alternatives [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of open source alternatives to popular proprietary software and SaaS, with licenses and GitHub stars.

Looking for a free, self-hostable replacement for a paid tool? Find the tool below and pick an alternative. Contributions are welcome, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

${categories.map((c) => `- [${c}](#${anchor(c)})`).join("\n")}

`;

for (const c of categories) {
  out += `## ${c}\n\n`;
  for (const t of byCategory[c].sort((a, b) => a.name.localeCompare(b.name))) {
    out += `### ${t.name}\n\n${t.description}\n\n| Alternative | Description | License | Stars |\n|---|---|---|---|\n${rows(t)}\n\n`;
  }
}

out += `## Notes

- Licenses and star counts are refreshed from the GitHub API and can change. Check each project before you adopt it.
- "Open source" here means source is publicly available. Some entries use fair-code or source-available licenses and are marked as such.

## Contributing

Add or edit entries in [\`data.json\`](data.json), then run:

\`\`\`bash
GITHUB_TOKEN=... node scripts/refresh-stats.mjs
node scripts/build-readme.mjs
\`\`\`

README.md is generated, so please don't edit it by hand.
`;

await writeFile(new URL("README.md", root), out);
console.log(`README.md written: ${tools.length} tools, ${categories.length} categories`);

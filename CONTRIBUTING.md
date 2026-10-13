# Contributing

Thanks for helping keep this Jev guide useful and evidence-backed.

## What belongs here

- A public project, benchmark, article, or implementation with a clear Jev or System One decision boundary.
- A concrete state, typed question contract, and application-owned policy, threshold, or side effect when those details are relevant.
- A useful pattern that another developer can inspect, reproduce, or adapt.

This is a curated guide, not a mirror of every Jev mention. The [Awesome Jev directory](https://awesomejev.com/) is a better place for broad discovery.

## Evidence checklist

For a project or implementation, include:

- a public repository or article and, when possible, the file that calls the API;
- setup instructions, license information, and a description of data sent to providers;
- the primitive used (`Choice`, `Score`, or `Noul`) and where code owns thresholds and side effects;
- reproducible examples or offline tests when behavior can be checked without an API key;
- model version, date, dataset, sample count, and metric for performance or benchmark claims;
- an explicit `experimental`, `dry-run`, `adapter`, or `open reproduction` label when applicable.

Do not include credentials, private customer data, unverified performance numbers, or irreversible actions as the only example path.

## Entry format

Add the smallest useful change to the closest section. A good row is:

```markdown
| [Project name](https://example.com) | Area | One sentence describing the inspectable decision boundary. |
```

Keep descriptions factual and avoid marketing language. If you built or maintain the project, disclose that in the pull request; affiliation is welcome, but it should be visible.

## Review rules

- Keep each pull request focused; do not reformat unrelated entries.
- Prefer primary project documentation and source links over unsourced summaries.
- Separate TypeSafe-reported measurements from independent measurements.
- Treat demos, adapters, open reproductions, and hosted Jev as distinct things.
- Recheck stale links, model aliases, prices, limits, and benchmark claims before updating them.
- Inclusion is not endorsement. The list may remove projects that become unavailable, misleading, or no longer evidence-backed.

Run the offline checks before opening a pull request:

```bash
python -m unittest discover -s tests -v
```

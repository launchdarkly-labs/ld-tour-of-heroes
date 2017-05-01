# Getting Started

Super simple Angular app with 1 module and 2 routes. Uses [LaunchDarkly](https://launchdarkly.com) feature flags to toggle search functionality.

## Get the Code
```
git clone https://github.com/launchdarkly/ld-tour-of-heroes.git toh
cd toh
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Ahead of Time (AoT) Compilation

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip

Runs AoT plus gzips and launches the app

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.
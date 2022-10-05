require("esbuild")
  .build({
    entryPoints: ["./build/generate.js"],
    bundle: true,
    outfile: "./build/out.js",
    platform: "node",
  })
  .catch(() => process.exit(1));

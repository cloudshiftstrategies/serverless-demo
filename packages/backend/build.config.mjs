import esbuild from "esbuild";
import * as fs from "fs";
import * as path from "path";
import copy from 'esbuild-plugin-copy';

const cmdArgs = process.argv.slice(2);
const devMode = cmdArgs.includes("--dev");
const watchMode = cmdArgs.includes("--watch");

const rootDir = path.resolve("./");
const lambdaDir = path.resolve(rootDir, "src");

// Add each ts and js file in src/ directory as an entry point
// Use object syntax for entry point so that each lambda
// can be bundled into a single file with the same name
const entryPoints = fs.readdirSync(lambdaDir).filter((file) => (file.endsWith(".ts")|| file.endsWith(".js")));

const pkg = JSON.parse(fs.readFileSync("./package.json", 'utf-8'));

const plugins = [];
const distDir = path.join("dist", "bundled")

try {
    entryPoints.forEach(async (entry) => {
        const outdir = path.join(distDir, entry.split(".").slice(0,-1).join("."))
        await esbuild.build({
            sourcemap: devMode ? "both" : true,
            entryPoints: [`./src/${entry}`],
            bundle: true,
            platform: "node",
            external: ["aws-sdk", "aws-lambda", "commonjs2", ...Object.keys(pkg.peerDependencies || {})],
            outdir,
            watch: watchMode,
            plugins
        });

        if (!watchMode) {
            console.log(`${entry} successfully built to ${outdir}`);
        }
    });
    if (watchMode) {
        console.log("esbuild is watching for file changes...")
    }
} catch (e) {
    process.exit(1);
}
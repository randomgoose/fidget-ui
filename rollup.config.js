import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"

const packageJson = require("./package.json")

export default [
    {
        input: "./widget-src/components/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./widget-src/tsconfig.json" })
        ],

    },
    {
        input: "build/esm/components/index.d.ts",
        output: [{ file: "build/index.d.ts", format: "esm" }],
        plugins: [dts()],
    }
]
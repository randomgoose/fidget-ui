import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"

const packageJson = require("./package.json")

export default [
    {
        input: "./widget-src/components/index.ts",
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            typescript({
                tsconfig: "./widget-src/tsconfig.json",
                exclude: [
                    "./widget-src/docs/*"
                ]
            })
        ],

    },
    {
        input: "build/esm/components/index.d.ts",
        output: [{ file: "build/index.d.ts", format: "esm" }],
        plugins: [dts()],
    }
]
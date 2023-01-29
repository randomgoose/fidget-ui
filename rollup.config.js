import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import commonjs from "@rollup/plugin-commonjs"

const packageJson = require("./package.json")
const iconsPackageJson = require("./src/icons/package.json")

export default [
    {
        input: "./src/components/index.ts",
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./src/tsconfig.json",
                exclude: [
                    "./src/docs/*",
                    "./src/code.tsx",
                ]
            })
        ],
        onwarn(warning, warn) {
            if (warning.code === 'THIS_IS_UNDEFINED') return;
            warn(warning);
        },
    },
    {
        input: "./src/icons/index.ts",
        output: [
            {
                file: iconsPackageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./src/icons/tsconfig.json",
            })
        ]
    },
    {
        input: "build/esm/components/index.d.ts",
        output: [{ file: "build/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
    {
        input: "icons/esm/index.d.ts",
        output: [{ file: "icons/index.d.ts", format: "esm" }],
        plugins: [dts()]
    }
]
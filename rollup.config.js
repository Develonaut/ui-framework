/* eslint-disable import/no-anonymous-default-export */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import * as path from "path";

const packageJson = require("./package.json");

export default {
  input: "src/lib/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    // Allows us to resolve absolute import paths inside the library.
    alias({
      entries: {
        "lib/hooks": path.join(process.cwd(), "src/lib/hooks"),
        "lib/utils": path.join(process.cwd(), "src/lib/utils"),
      },
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "**/node_modules/**",
      plugins: ["@babel/plugin-proposal-optional-chaining"],
    }),
    postcss(),
  ],
  // Suppress the external dependency warning.
  // prop-types: We have react as a peer dependency prop-types will
  //             come with it.
  external: ["prop-types"]
};

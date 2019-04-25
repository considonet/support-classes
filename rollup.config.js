import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      globals: {
        react: "React"
      }
    },
    {
      file: pkg.module,
      format: "es",
      globals: {
        react: "React"
      }
    }
  ],
  plugins: [
    typescript({
      include: [ "*.ts+(|x)", "**/*.ts+(|x)"],
      exclude: "node_modules/**", // only transpile our source code
      tsconfig: "tsconfig.json"
    }),
    babel({
      include: [ "*.js+(|x)", "**/*.js+(|x)"],
      exclude: "node_modules/**" // only transpile our source code
    }),
    resolve(),
    commonjs()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]
};

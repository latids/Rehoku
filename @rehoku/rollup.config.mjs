import { terser } from "rollup-plugin-terser";

const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: devMode ? "inline" : false,
  },
  plugins: [
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: false,
        drop_debugger: !devMode,
        keep_fnames: true
      },
      output: { quote_style: 1 },
    }),
  ],
};

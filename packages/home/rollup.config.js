import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

function generateHTMLPlugin() {
  return {
    name: 'generate-html',
    renderChunk(code) {
      return `<body>
  <script>
    ${code}
  </script>
</body>`;
    },
  };
}

export default {
  input: './src/highlighter.ts',
  output: {
    file: 'dist/ui.html',
  },
  // Generate HTML from the compiled output bundle and output the UI
  plugins: [typescript(), resolve(), terser(), generateHTMLPlugin()],
};

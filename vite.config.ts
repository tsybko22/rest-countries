import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

const aliases = ['', 'components', 'pages', 'helpers', 'images'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases.map((alias) => ({
      find: `@${alias}`,
      replacement: resolve(__dirname, `src/${alias}`),
    })),
  },
});

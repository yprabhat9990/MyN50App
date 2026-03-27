import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      /** jsdom 27+ pulls cssstyle → @asamuzakjp/css-color which `require()`s ESM @csstools/* and breaks Vitest workers. */
      environment: 'happy-dom',
      setupFiles: './src/test/setup.ts',
      css: true,
    },
  })
);

import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import multiInput from 'rollup-plugin-multi-input';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from '../../package.json';

const DEFAULT_CONFIG = {
  external: [...Object.keys(pkg.dependencies || {})],
  input: './src/component/atomic/text/index.tsx',
  output: [
    {
      chunkFileNames: 'chunks/[name]-[hash].js',
      dir: 'lib',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    multiInput({ relative: 'src/' }),
    cleaner({
      targets: ['./lib/']
    }),
    terser({
      output: {
        comments: ''
      }
    }),
    alias({
      entries: [
        { find: '@/atomic', replacement: 'src/component/atomic' },
        { find: '@/molecules', replacement: 'src/component/molecules' },
        { find: '@/organism', replacement: 'src/component/organism' },
        { find: '@/helper', replacement: 'src/utils/helper' },
        { find: '@/modules', replacement: 'src/utils/modules' },
        { find: '@/constant', replacement: 'src/utils/constant' },
        { find: '@/interface', replacement: 'src/utils/interface' },
        { find: '@/assets', replacement: 'src/assets' },
        { find: '@/utils', replacement: 'src/utils' },
        { find: '@/style', replacement: 'src/style' }
      ]
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig-build.json',
      typescript: require('typescript')
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass']
    })
  ]
};

export default ({ customPath }) => ({
  ...DEFAULT_CONFIG,
  input: customPath.split('\n')
});

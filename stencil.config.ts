import { Config } from '@stencil/core';
import { version } from './package.json';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'reusable-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-custom',
      generator: (docs: any) => {
        docs = Object.assign(docs, { version });
      }
    },
    {
      type: 'docs-json',
      file: './dist/components.json'
    },
    {
      type: 'docs-vscode',
      file: './dist/custom-elements.json'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      includePaths: ['./node_modules', './src/global-styles']
    })
  ]
};

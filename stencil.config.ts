import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'nidhis-stencil-webc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'nidhis-stencil-webc',
      proxiesFile: 'stencil-react-proxy.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};

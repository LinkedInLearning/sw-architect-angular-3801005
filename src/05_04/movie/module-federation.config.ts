import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'movie',
  exposes: {
    './Routes': 'movie/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

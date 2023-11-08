import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'book',
  exposes: {
    './Routes': 'book/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

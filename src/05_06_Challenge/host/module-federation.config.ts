import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'host',
    remotes: [ 'book' ],
};

export default config;

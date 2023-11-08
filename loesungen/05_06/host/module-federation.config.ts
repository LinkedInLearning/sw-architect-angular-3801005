import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'host',
    remotes: [ 'book', 'movie' ],
};

export default config;

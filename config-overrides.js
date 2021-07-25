const path = require('path');

module.exports = {
    webpack: (config, argv) => {
        if (process.env.BUILD_TYPE !== 'ilc') return config;
        config.entry = path.resolve(__dirname, 'src/client.ts')
        config.output = {
            filename: 'client.js',
            libraryTarget: 'system',
            path: path.resolve(__dirname, 'build'),
            jsonpFunction: 'wpHeader', // We need this to avoid conflicts of on-demand chunks in the global namespace
            devtoolNamespace: 'AppHeader',
        };
        delete config.optimization
        config.externals = [ "react", "react-dom", 'react-router-dom' ]
        return config
    }
};

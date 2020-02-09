const path = require('path')

module.exports = require('@zeit/next-sass')({
    cssModules: true,
    sassLoaderOptions: {
        implementation: require('sass')
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'components': path.resolve(__dirname, 'components/'),
            'pages': path.resolve(__dirname, 'pages/'),
            'store': path.resolve(__dirname, 'store/'),
            'assets': path.resolve(__dirname, 'assets/'),
            'utils': path.resolve(__dirname, 'utils/'),
            'plugins': path.resolve(__dirname, 'plugins/')
        }
        return config
    }
})

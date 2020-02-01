module.exports = require('@zeit/next-sass')({
    cssModules: true,
    sassLoaderOptions: {
        implementation: require('sass')
    }
})

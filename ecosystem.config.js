module.exports = {
    apps: [{
        name: 'show-project-mobile',
        script: './app.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        }
    }]
}
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // API Server
    {
      name: 'dispofi',
      script: 'index.js',
      env: {
        PORT: 8000,
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 8000
      }
    }
  ]
}

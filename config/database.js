module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3305),
        database: env('DATABASE_NAME', 'strapi-db'),
        username: env('DATABASE_USERNAME', 'rhodia'),
        password: env('DATABASE_PASSWORD', 'snookpassword'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

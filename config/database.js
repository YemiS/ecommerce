module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', process.env.DATABASE_HOST),
        port: env.int('DATABASE_PORT', process.env.DATABASE_PORT),
        database: env('DATABASE_NAME', 'Strapi'),
        username: env('DATABASE_USERNAME', 'rhodia'),
        password: env('DATABASE_PASSWORD', 'snookpassword'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

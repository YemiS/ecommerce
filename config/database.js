module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'strapi-db.cns4g3fkdorf.eu-west-2.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi-db'),
        username: env('DATABASE_USERNAME', 'rhodia'),
        password: env('DATABASE_PASSWORD', 'snookpassword'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

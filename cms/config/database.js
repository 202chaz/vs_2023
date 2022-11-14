const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'vision-dev'),
      user: env('DATABASE_USERNAME', 'vision'),
      password: env('DATABASE_PASSWORD', 'vision'),
      schema: env('DATABASE_SCHEMA', 'public'), // required only for Postgres DB
    },
    useNullAsDefault: true,
  },
});

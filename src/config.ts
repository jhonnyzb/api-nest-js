import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mysql: {
      dbName: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT, 10),
      host: process.env.DATABASE_HOST,
    },
    apiKey: process.env.API_KEY,
    payment: {
      dbName: process.env.MYSQL_DATABASE_PAYMENT,
      user: process.env.MYSQL_USER_PAYMENT,
      password: process.env.MYSQL_PASSWORD_PAYMENT,
      port: parseInt(process.env.MYSQL_PORT_PAYMENT, 10),
      host: process.env.MYSQL_HOST_PAYMENT,
    }
    // jwtSecret: process.env.JWT_SECRET,
  };
});

import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';

import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, password, port, dbName } = configService.mysql;
        return {
          type: 'mysql',
          host,
          port,
          username: user,
          password,
          database: dbName,
          entities: [
            'dist/**/*.entity{.ts,.js}',
            'src/modules/**/*.entity{.ts,.js}',
          ],
          synchronize: false,
        };
      },
    }),
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      name: 'payment',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, password, port, dbName } = configService.payment;
        return {
          type: 'mysql',
          host,
          port,
          username: user,
          password,
          database: dbName,
          // synchronize: true,
          synchronize: false,
          autoLoadEntities: true
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule } from './auth_module/auth.module';
import { SuperadminModule } from './superadmin/superadmin.module';

import { enviroments } from './enviroments';
import { DatabaseModule } from './database/database.module';
import { PaymentModule } from './payment/payment.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
    AuthModule,
    SuperadminModule,
    DatabaseModule,
    PaymentModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}

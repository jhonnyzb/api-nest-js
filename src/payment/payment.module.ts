import { Module } from '@nestjs/common';
import { DaviplataController } from './controllers/daviplata/daviplata.controller';
import { DaviplataService } from './services/daviplata/daviplata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment], 'payment')],
  controllers: [DaviplataController],
  providers: [DaviplataService]
})
export class PaymentModule {}

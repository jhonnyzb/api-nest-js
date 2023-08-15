import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { BuyDaviplataDto } from 'src/payment/dto/buy-daviplata.dto';
import { ConfirmDaviplataDto } from 'src/payment/dto/confirm-daviplata.dto';
import { OtpDaviplataDto } from 'src/payment/dto/otp-daviplata.dto';
import { DaviplataService } from 'src/payment/services/daviplata/daviplata.service';

@Controller('daviplata')
export class DaviplataController {

    constructor(private daviplataService: DaviplataService) { }

    @Get('auth-daviplata')
    async auth(@Res() res: Response): Promise<any> {
        console.log('aquii1');
        const response = await this.daviplataService.auth();
        res.status(response.statusCode).json(response);
    }

    // @Get('buy-daviplata')
    //  prueba(@Res() res: Response) {
    //     console.log('aquii3');
    //     // const response = await this.daviplataService.auth();
    //     res.status(200).json({response: 'hola'});
    // }

    @Post('buy-daviplata')
    async buy(@Body() params: any, @Res() res: Response): Promise<any> {
      console.log('aquii', params);
      res.status(200).json({response: 'hola'});
      // const response = await this.daviplataService.buy(params);
      // res.status(response.statusCode).json(response);
    }

    @Post('prueba-daviplata')
    async prueba(@Body() params: any, @Res() res: Response): Promise<any> {
      console.log('aquii', params);
      res.status(200).json({response: 'hola'});
      // const response = await this.daviplataService.buy(params);
      // res.status(response.statusCode).json(response);
    }

    @Post('otp-daviplata')
    async otp(@Body() params: OtpDaviplataDto, @Res() res: Response): Promise<any> {
      const response = await this.daviplataService.otp(params);
      res.status(response.statusCode).json(response);
    }

    @Post('confirm-daviplata')
    async confirm(@Body() params: ConfirmDaviplataDto, @Res() res: Response): Promise<any> {
      const response = await this.daviplataService.confirm(params);
      res.status(response.statusCode).json(response);
    }

    @Post('get-transaction')
    async getTransaction(@Body() params: any, @Res() res: Response): Promise<any> {
      const response = await this.daviplataService.getPaymentById(params.codePay);
      res.status(200).json(response);
    }
}

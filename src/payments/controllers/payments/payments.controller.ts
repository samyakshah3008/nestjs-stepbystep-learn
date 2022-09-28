import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PaymentsService } from 'src/payments/services/payments/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(
    @Inject('PAYMENTS_SERVICE')
    private readonly paymentsService: PaymentsService,
  ) {}

  @Get()
  getPayments(@Req() req: Request, @Res() res: Response) {
    const { count, page } = req.query;
    if (!count || !page) {
      res.status(400).send({ msg: 'Missing any parameter' });
    } else {
      res.status(200).send({ msg: 'Success' });
    }
  }
  @Post('create')
  async createPayment() {
    const response = await this.paymentsService.createPayment();
    return response;
  }
}

// create a function with traditional expressJS format, destructure count and page from request. Check condition that if count or page is false, throw error 404 or send 200

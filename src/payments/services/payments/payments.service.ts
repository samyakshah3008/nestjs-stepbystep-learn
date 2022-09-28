import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  private users = [
    {
      email: 'samyakshah@gmail.com',
    },
    {
      email: 'samyakshah2@gmail.com',
    },
    {
      email: 'samyakshah3@gmail.com',
    },
  ];

  async createPayment() {
    return {
      id: 1,
      status: 'success',
    };
  }
}

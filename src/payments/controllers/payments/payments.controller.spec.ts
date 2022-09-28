import { Test, TestingModule } from '@nestjs/testing';
import { Request, response, Response } from 'express';
import { PaymentsController } from './payments.controller';

describe('PaymentsController', () => {
  let controller: PaymentsController;

  let requestMock = {
    query: {},
  } as unknown as Request;

  let responseMock = {
    status: jest.fn((x) => ({
      send: jest.fn((y) => y),
    })),
    send: jest.fn((x) => x),
  } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
    }).compile();

    controller = module.get<PaymentsController>(PaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getPayments', () => {
    it('should return status of 400', () => {
      controller.getPayments(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(400);
    });
  });

  describe('createPayment', () => {
    it('should return a successful response', async () => {
      return await controller.createPayment();
    });
  });
});

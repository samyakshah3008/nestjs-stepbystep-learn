import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
    
    @Get()
    getPayments(@Req() req: Request, @Res() res: Response){
        const {count,page} = req.query
        if(!count || !page){
            res.status(400).send({msg: "Missing any parameter"})
        } else{
            res.status(200).send({msg: "Success"})
        }

    }
}

// create a function with traditional expressJS format, destructure count and page from request. Check condition that if count or page is false, throw error 404 or send 200

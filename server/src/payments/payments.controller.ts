import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/google.strategy';
import { logger } from '../logs/loki.logger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Payment URL' })
  @Post('donate')
  donate(
    @Body() paymentData: CreatePaymentDto,
    @Req() req,
  ): Promise<{ message: string; url?: string }> {
    const userId = req.userId;

    logger.info('Payment request', { paymentData, userId });

    return this.paymentsService.donate(paymentData, userId);
  }

  @ApiResponse({ status: 200, description: 'Payment URL' })
  @Post('donateAnonymously')
  donatAnonymously(
    @Body() paymentData: CreatePaymentDto,
  ): Promise<{ message: string; url?: string }> {
    logger.info('Anonymous payment request', { paymentData });

    return this.paymentsService.donate(paymentData, null);
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Payments by User' })
  @Get()
  async getTotalAmountDonated(@Req() req): Promise<{ amount: number }> {
    const userId = req.userId;

    const amount = await this.paymentsService.getTotalAmountDonated(userId);

    logger.info('Total amount donated', { amount, userId });

    return { amount };
  }
}

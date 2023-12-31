import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { TokenPayload } from "google-auth-library";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "./entities/payment.entity";
import { Repository } from "typeorm";
import fetch from "node-fetch";

@Injectable()
export class PaymentsService {
  constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>) {}

  async donate(
    paymentData: CreatePaymentDto,
    userId: string | null,
  ): Promise<{ message: string; url?: string }> {
    
    paymentData.amount = paymentData.amount * 2;

    const donationData = {
      mode: 'payment',
      amount: paymentData.amount,
      campaignId: paymentData.campaignId,
      personId: '',
      firstName: 'Anonymous',
      lastName: 'Donor',
      isAnonymous: true,
      phone: null,
      successUrl:
        'https://podkrepi.bg/bg//campaigns/donation/church-dimitar-solunski-resen?success=true',
      cancelUrl:
        'https://podkrepi.bg/bg//campaigns/donation/church-dimitar-solunski-resen?success=false',
      message: '',
    };

    const response = await fetch(
      'https://dev.podkrepi.bg/api/v1/donation/create-checkout-session',
      {
        method: 'POST',
        body: JSON.stringify(donationData),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const url = await response.json();
    
    if (userId) {
      const payment = new Payment();

      payment.userId = userId;
      payment.campaignId = paymentData.campaignId;
      payment.amount = paymentData.amount;

      await this.paymentRepository.save(payment);
    }
    
    return {
      message: 'success',
      url: url.session.url,
    };
  }

  async getTotalAmountDonated(userId: string): Promise<number> {
    const result = await this.paymentRepository
        .createQueryBuilder("payment")
        .where("payment.userId = :id", { id: userId })
        .select("SUM(amount)")
        .getRawOne() as { sum: number | null};

    console.log(result);

    return (result.sum ?? 0) / 100;
  }
}

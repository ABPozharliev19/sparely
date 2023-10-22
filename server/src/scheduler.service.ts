import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "./payments/entities/payment.entity";
import { Repository } from "typeorm";
import { writeFile } from "fs";

@Injectable()
export class TasksService {
	private readonly logger = new Logger(TasksService.name);

	constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>) {}

	@Cron(CronExpression.EVERY_DAY_AT_2AM)
	async backupDB() {
		const payments = await this.paymentRepository.find();

		const json = JSON.stringify(payments);

		const todayDate = new Date();
		const dd = String(todayDate.getDate()).padStart(2, '0');
		const mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = todayDate.getFullYear();

		const today = mm + '/' + dd + '/' + yyyy;

		writeFile(today, json, function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		});
	}
}

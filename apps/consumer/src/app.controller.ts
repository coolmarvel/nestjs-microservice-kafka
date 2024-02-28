import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }

  @MessagePattern('fibonacci')
  getFibonacci(@Payload() message: { n: number }) {
    return this.service.getFibonacci(message.n);
  }
}

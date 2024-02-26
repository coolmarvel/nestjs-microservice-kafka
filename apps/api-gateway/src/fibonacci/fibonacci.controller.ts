import { Controller, Get, Query } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';

@Controller('fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @Get()
  async getFibonacci() {
    return this.fibonacciService.fibonacci(40);
  }

  @Get('microservice')
  async getFibonacciResult() {
    return await this.fibonacciService.fibonacciResult(40);
  }
}

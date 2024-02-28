import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private fibonacci(n: number) {
    return n < 1 ? 0 : n <= 2 ? 1 : this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  getFibonacci(n: number) {
    return this.fibonacci(n);
  }
}

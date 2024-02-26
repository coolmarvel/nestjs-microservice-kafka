import { Module } from '@nestjs/common';
import { FibonacciModule } from './fibonacci/fibonacci.module';

@Module({
  imports: [FibonacciModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

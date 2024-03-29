import { Module } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { FibonacciController } from './fibonacci.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FIBONACCI_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: { clientId: 'api-gateway', brokers: [process.env.RUNNING_IN_DOCKER === 'true' ? 'kafka:9093' : 'localhost:9092'] },
          consumer: { groupId: 'kafka-microservices' },
        },
      },
    ]),
  ],
  providers: [FibonacciService],
  controllers: [FibonacciController],
})
export class FibonacciModule {}

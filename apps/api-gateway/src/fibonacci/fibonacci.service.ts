import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Admin } from '@nestjs/microservices/external/kafka.interface';
import { Kafka } from 'kafkajs';

@Injectable()
export class FibonacciService {
  private admin: Admin;

  constructor(@Inject('FIBONACCI_SERVICE') private client: ClientKafka) {}

  fibonacci(n: number): number {
    return n < 1 ? 0 : n <= 2 ? 1 : this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  async onModuleInit() {
    this.client.subscribeToResponseOf('fibonacci');
    const kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:9092'] });

    this.admin = kafka.admin();

    const topics = await this.admin.listTopics();
    const topicList = [];
    if (!topics.includes('fibonacci')) topicList.push({ topic: 'fibonacci', numPartitions: 10, replicationFactor: 1 });
    if (!topics.includes('fibonacci.reply')) topicList.push({ topic: 'fibonacci.reply', numPartitions: 10, replicationFactor: 1 });

    if (topicList.length) await this.admin.createTopics({ topics: topicList });
  }

  async fibonacciResult(n: number) {
    return new Promise((resolve) => {
      this.client.send('fibonacci', JSON.stringify({ num: n })).subscribe((result: number) => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>', result);

        resolve(result);
      });
    });
  }
}

import { Controller, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller('status')
export class StatusController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:5673'],
        queue: 'fila_status',
      },
    });
  }

  @Get()
  async obterStatus(): Promise<number> {
    return this.client.send<number, { qtdPessoasNaFrente: number }>(
      'consultar_status', 
      { qtdPessoasNaFrente: 3 }
    ).toPromise();
  }
}

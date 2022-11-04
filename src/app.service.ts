import { Injectable, RequestMethod } from '@nestjs/common';

interface Iroute {
  route: string;
  method: string;
  description: string;
}

const routes: Iroute[] = [
  { route: '/products', method: 'GET', description: 'Lista produktów' },
  { route: '/products/:id', method: 'GET', description: 'Szczegóły produktu' },
  { route: '/products/:id', method: 'PUT', description: 'Update produktu' },
  { route: '/products', method: 'POST', description: 'Utworzenie produktu' },
  { route: '/products/:id', method: 'DELETE', description: 'Usunięcie produktu' },
]

@Injectable()
export class AppService {
  getHello(): {message: string, routes: Iroute[] } {
    return { message: 'Welcome in junior-nodejs-task.', routes};
  }
}

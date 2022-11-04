import { Injectable, RequestMethod } from '@nestjs/common';

interface Iroute {
  route: string;
  method: RequestMethod;
  description: string;
}

const routes: Iroute[] = [
  { route: '/products', method: RequestMethod.GET, description: 'Lista produktów' },
  { route: '/products/:id', method: RequestMethod.GET, description: 'Szczegóły produktu' },
  { route: '/products/:id', method: RequestMethod.PUT, description: 'Update produktu' },
  { route: '/products', method: RequestMethod.POST, description: 'Utworzenie produktu' },
  { route: '/products/:id', method: RequestMethod.DELETE, description: 'Usunięcie produktu' },
]

@Injectable()
export class AppService {
  getHello(): {message: string, routes: Iroute[] } {
    return { message: 'Welcome in junior-nodejs-task.', routes};
  }
}

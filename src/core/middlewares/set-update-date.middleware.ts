import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { Product } from '../../modules/products/schemas/product.schema';
import { Irequest } from '../../utils/types';

@Injectable()
export class SetUpdateDateMiddleware implements NestMiddleware {
  use(req: Irequest<Product>, res: Response, next: NextFunction) {
    req.body.updateDate = new Date();
    next();
  }
}

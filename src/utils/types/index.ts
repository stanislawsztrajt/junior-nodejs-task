import { Request } from 'express';

export interface Irequest<T> extends Request {
  body: T;
}

export interface Ierror {
  message: string;
}

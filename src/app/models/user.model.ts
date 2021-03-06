import { Area } from './area';

export class User {
  constructor(
    public email: string,
    public fullName: string,
    public roles: string[],
    public id?: number,
    public avatar?: string,
    public createdAt?: Date,
    public lastPasswordChangeAt?: Date,
    public enabled?: boolean,
    public username?: string,
    public cuil?: string,
    public cuit?: string,
    public numeroLegajo?: number,
    public sueldoBasico?: number,
    public area?: Area
  ) {}
}

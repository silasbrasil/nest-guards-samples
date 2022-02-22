import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private sharedUser: Record<string, any>;

  constructor() {
    console.log('AppService created!');
  }

  getHello(): string {
    return 'Hello World!';
  }

  getHi(): string {
    return 'Hi Everyone';
  }

  setSharedUser(user: Record<string, any>) {
    console.log('User setted:', user);
    return this.sharedUser = user;
  }

  getSharedUser() {
    return this.sharedUser;
  }

  async getRequestUser(uid: string) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return { uid }
  }
}

import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthUser } from './decorators/auth-user.decorator';
import { AuthenticationGuard } from './guards/authentication.guard';

@Controller()
@UseGuards(AuthenticationGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@AuthUser() authUser): string {
    console.log(authUser);
    return this.appService.getHello();
  }

  @Get('/hi')
  getHi(@AuthUser() authUser): string {
    console.log(authUser);
    return this.appService.getHi();
  }

  @Get('/user')
  async getUserData(
    @Query('name') name: string,
    @Query('email') email: string
  ) {
    this.appService.setSharedUser({ name, email });
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const user = this.appService.getSharedUser();

    return user;
  }

  @Get('/user/:uid')
  async getUserId(@Param('uid') uid: string) {
    return this.appService.getRequestUser(uid);
  }
}

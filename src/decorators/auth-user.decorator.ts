import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const AuthUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];

    console.log('Decorator');

    // if (!authorization) throw new UnauthorizedException('Authentication token are required');

    // const arr = authorization.split(' ');
    // const token = arr.lenght == 2
    //   ? arr[1]
    //   : arr[0];

    // console.log(token);

    return { uid: '1qw2w2e2weqweds', email: 'meuemail@gmail.com' }
  },
);
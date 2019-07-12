import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign, decode, verify } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/constants';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  private readonly JWT_SECRET_KEY = JWT_SECRET; // <- replace this with your secret key

  constructor(private readonly userService: UserService) {}

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    // try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: User = await this.userService.findOneByThirdPartyId(
      //   thirdPartyId,
      //   provider,
      // );

      // if (!user) {
      //   user = await this.userService.registerOAuthUser(
      //     thirdPartyId,
      //     provider,
      //   );
      // }

      // console.log('user', user);

      // const payload = {
      //   // id: user.id,
      //   thirdPartyId,
      //   provider,
      //   id: user.id,
      //   roles: ['USER'],
      // };

    //   const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
    //     expiresIn: 604800, // 7 days
    //   });
    //   return jwt;
    // } catch (err) {
    //   console.log(err);
    //   throw new InternalServerErrorException('validateOAuthLogin', err.message);
    // }
    return new Promise(() => 1);
  }

  async refreshJwt(jwt: string) {
    try {
      const payload: any = verify(jwt, this.JWT_SECRET_KEY);

      const { exp, iat, ...cleanPayload } = payload;
      const newJwt = sign(cleanPayload, this.JWT_SECRET_KEY, {
        expiresIn: 604800, // 7 days
      });
      return newJwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
}

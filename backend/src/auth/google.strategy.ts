import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BACKEND_URL } from 'src/constants';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: GOOGLE_CLIENT_ID, // <- Replace this with your client id
      clientSecret: GOOGLE_CLIENT_SECRET, // <- Replace this with your client secret
      callbackURL: `${BACKEND_URL}/auth/google/callback`,
      passReqToCallback: true,
      scope: ['email'],
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: (err: any, user: any) => void,
  ) {
    try {
      const jwt: string = await this.authService.validateOAuthLogin(
        profile.id,
        Provider.GOOGLE,
      );
      const user = {
        jwt,
      };

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}

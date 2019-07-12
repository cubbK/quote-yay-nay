import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>,
  ) {}

  async findOneByThirdPartyId(thirdPartyId: string, provider: string) {
    // return this.userRepository.findOne({ [provider]: thirdPartyId });
  }

  async registerOAuthUser(
    thirdPartyId: string,
    provider: string,
  ) {
    // const user = new User();
    // user.google = thirdPartyId;

    // return await this.userRepository.save(user);
  }
}

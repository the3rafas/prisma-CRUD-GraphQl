import { Module } from '@nestjs/common';
import { AutherService } from './auther.service';
import { AutherResolver } from './auther.resolver';

@Module({
  imports: [],
  providers: [AutherResolver, AutherService],
})
export class AutherModule {}

import { Module } from '@nestjs/common';
import { AutherService } from './auther.service';
import { AutherResolver } from './auther.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AutherResolver, AutherService],
})
export class AutherModule {}

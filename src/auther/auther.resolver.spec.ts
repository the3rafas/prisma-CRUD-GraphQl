import { Test, TestingModule } from '@nestjs/testing';
import { AutherResolver } from './auther.resolver';
import { AutherService } from './auther.service';

describe('AutherResolver', () => {
  let resolver: AutherResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutherResolver, AutherService],
    }).compile();

    resolver = module.get<AutherResolver>(AutherResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

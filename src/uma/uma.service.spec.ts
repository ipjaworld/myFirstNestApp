import { Test, TestingModule } from '@nestjs/testing';
import { UmaService } from './uma.service';

describe('UmaService', () => {
  let service: UmaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UmaService],
    }).compile();

    service = module.get<UmaService>(UmaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

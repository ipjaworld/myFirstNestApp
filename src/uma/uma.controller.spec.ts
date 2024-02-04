import { Test, TestingModule } from '@nestjs/testing';
import { UmaController } from './uma.controller';

describe('UmaController', () => {
  let controller: UmaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UmaController],
    }).compile();

    controller = module.get<UmaController>(UmaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

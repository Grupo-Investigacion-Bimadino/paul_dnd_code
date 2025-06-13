import { Test, TestingModule } from '@nestjs/testing';
import { MazmorrasController } from './mazmorras.controller';
import { MazmorrasService } from './mazmorras.service';

describe('MazmorrasController', () => {
  let controller: MazmorrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MazmorrasController],
      providers: [MazmorrasService],
    }).compile();

    controller = module.get<MazmorrasController>(MazmorrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

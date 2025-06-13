import { Test, TestingModule } from '@nestjs/testing';
import { MazmorrasService } from './mazmorras.service';

describe('MazmorrasService', () => {
  let service: MazmorrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MazmorrasService],
    }).compile();

    service = module.get<MazmorrasService>(MazmorrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

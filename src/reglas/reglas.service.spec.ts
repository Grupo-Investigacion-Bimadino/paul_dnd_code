import { Test, TestingModule } from '@nestjs/testing';
import { ReglasService } from './reglas.service';

describe('ReglasService', () => {
  let service: ReglasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReglasService],
    }).compile();

    service = module.get<ReglasService>(ReglasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

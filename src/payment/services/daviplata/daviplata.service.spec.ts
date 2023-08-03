import { Test, TestingModule } from '@nestjs/testing';
import { DaviplataService } from './daviplata.service';

describe('DaviplataService', () => {
  let service: DaviplataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaviplataService],
    }).compile();

    service = module.get<DaviplataService>(DaviplataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

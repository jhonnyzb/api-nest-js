import { Test, TestingModule } from '@nestjs/testing';
import { DaviplataController } from './daviplata.controller';

describe('DaviplataController', () => {
  let controller: DaviplataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaviplataController],
    }).compile();

    controller = module.get<DaviplataController>(DaviplataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

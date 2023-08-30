import { Test, TestingModule } from '@nestjs/testing';
import { S3Controller } from './s3.controller';

describe('UploadController', () => {
  let controller: S3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [S3Controller],
    }).compile();

    controller = module.get<S3Controller>(S3Controller);
  });
});
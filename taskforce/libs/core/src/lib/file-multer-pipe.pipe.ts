import { Injectable, PipeTransform } from '@nestjs/common';
import { FileElement } from '@taskforce/shared-types';
import { path } from 'app-root-path';
import { Express } from 'express';
import { writeFile } from 'fs-extra';
import 'multer';

@Injectable()
export class FileMulterPipe implements PipeTransform<Express.Multer.File, Promise<FileElement>> {
  async transform(file: Express.Multer.File): Promise<FileElement> {
    console.log('FileMulterPipe', {...file}, file.buffer);
    await writeFile(`${file.destination}/${file.originalname}`, file.buffer)
    return {
        url: `${file.destination}/${file.originalname}`,
        name: file.originalname,
      }
  }
}

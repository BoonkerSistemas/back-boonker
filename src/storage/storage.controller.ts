import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param, ParseFilePipe,
  Post,
  Res,
  ServiceUnavailableException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import {StorageService} from "./storage.service";
import {ApiTags} from "@nestjs/swagger";
@ApiTags("Media")
@Controller("media")
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Post(':project')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('project') project: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          // new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )

      file: Express.Multer.File,
  ) {
   return  await this.storageService.save(file.originalname, file.buffer, project);
  }

  @Post('/media')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileU(
    @Param('project') project: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          // new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )

      file: Express.Multer.File,
  ) {
    return  await this.storageService.save(file.originalname, file.buffer, project);
  }

  /*@Get("/:mediaId")
  async downloadMedia(@Param("mediaId") mediaId: string, @Res() res: Response) {
    let storageFile: StorageFile;
    try {
      storageFile = await this.storageService.get("media/" + mediaId);
    } catch (e) {
      if (e.message.toString().includes("No such object")) {
        throw new NotFoundException("image not found");
      } else {
        throw new ServiceUnavailableException("internal error");
      }
    }
    res.setHeader("Content-Type", storageFile.contentType);
    res.setHeader("Cache-Control", "max-age=60d");
    res.end(storageFile.buffer);
  }*/
}

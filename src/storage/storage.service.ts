import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class StorageService {
  private readonly s3Client = new S3Client({
    region: 'us-east-1',
  });

  constructor() {

  }

  async save(fileName: string, file: Buffer, key: string) {
    try {

      let newKey = key + '/' + fileName;


      const uploadCommand = new PutObjectCommand({
        Bucket: 'boonker-construcciones',
        Key: newKey,
        Body: file,
        ACL: 'public-read',
      });
      ////console.log(this.s3Client)

      let res = await this.s3Client.send(uploadCommand);
      ////console.log(res)

      return { acl: 'https://boonker-construcciones.s3.amazonaws.com/' + newKey };

    } catch (e) {
      ////console.log(e);
    }

  }

  /*  async delete(path: string) {
      await this.storage
          .bucket(this.bucket)
          .file(path)
          .delete({ ignoreNotFound: true });
    }

    async get(path: string): Promise<StorageFile> {
      const fileResponse: DownloadResponse = await this.storage
          .bucket(this.bucket)
          .file(path)
          .download();
      const [buffer] = fileResponse;
      const storageFile = new StorageFile();
      storageFile.buffer = buffer;
      storageFile.metadata = new Map<string, string>();
      return storageFile;
    }*/

}

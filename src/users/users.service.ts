import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schemas';
import * as CryptoJS from 'crypto-js';
import * as bcrypt from 'bcryptjs';
import { EmailService } from '../service/email.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private email: EmailService,
  ) {
  }

  async create(createRegionDto: CreateUserDto): Promise<any> {
    try {
      ////console.log(createRegionDto);
      let isTrue = await this.userModel.findOne({
        $and: [
          { name: createRegionDto.name },
          { statusGeneral: true },
        ],
      }).exec();
      let isTrueName = await this.userModel.findOne({
        $and: [
          { username: createRegionDto.username },
          { statusGeneral: true },
        ],
      }).exec();
      let isTrueEmail = await this.userModel.findOne({
        $and: [
          { email: createRegionDto.email},
          { statusGeneral: true },
        ],
      }).exec();
      ////console.log(isTrue, isTrueName, isTrueEmail);
      if (isTrue && isTrue.name.toString().toLowerCase() === createRegionDto.name.toString().toLowerCase()) {
        ////console.log(1);
        return { msm: 'Ya existe un registro con este nombre' };
      } else {
        if (isTrueName && isTrueName.username.toString().toLowerCase() === createRegionDto.username.toString().toLowerCase()) {
          ////console.log(2);
          return { msm: 'Ya existe un registro con este usuario' };
        } else {
          if (isTrueEmail && isTrueEmail.email.toString().toLowerCase() === createRegionDto.email.toString().toLowerCase()) {
            return { msm: 'Ya existe un registro con este email' };
          } else {
            const valueDecrypt = CryptoJS.AES.decrypt(createRegionDto.password, 'B00nk3rconstrucciones').toString(CryptoJS.enc.Utf8);

            if (!valueDecrypt) {
              return null;
            }

            createRegionDto.password1 = valueDecrypt;

            createRegionDto.password = await bcrypt.hash(valueDecrypt, 10);

            await this.email.sendPassword(createRegionDto, 'Creación de usuarios');

            return this.userModel.create(createRegionDto);
          }
        }



      }
    } catch (e) {
      ////console.log(e);
    }


  }

  async createFinal(createRegionDto: CreateUserDto): Promise<any> {
    try {
      ////console.log(createRegionDto);
      let isTrue = await this.userModel.findOne({
        $and: [
          { name: createRegionDto.name },
          { statusGeneral: true },
        ],
      }).exec();
      let isTrueName = await this.userModel.findOne({
        $and: [
          { username: createRegionDto.username },
          { statusGeneral: true },
        ],
      }).exec();
      let isTrueEmail = await this.userModel.findOne({
        $and: [
          { email: createRegionDto.email},
          { statusGeneral: true },
        ],
      }).exec();
      ////console.log(isTrue, isTrueName, isTrueEmail);
      if (isTrue && isTrue.name.toString().toLowerCase() === createRegionDto.name.toString().toLowerCase()) {
        ////console.log(1);
        return { msm: 'Ya existe un registro con este nombre' };
      } else {
        if (isTrueName && isTrueName.username.toString().toLowerCase() === createRegionDto.username.toString().toLowerCase()) {
          ////console.log(2);
          return { msm: 'Ya existe un registro con este usuario' };
        } else {
          if (isTrueEmail && isTrueEmail.email.toString().toLowerCase() === createRegionDto.email.toString().toLowerCase()) {
            return { msm: 'Ya existe un registro con este email' };
          } else {
            const valueDecrypt = CryptoJS.AES.decrypt(createRegionDto.password, 'B00nk3rconstrucciones').toString(CryptoJS.enc.Utf8);

            if (!valueDecrypt) {
              return null;
            }

            createRegionDto.password1 = valueDecrypt;

            createRegionDto.password = await bcrypt.hash(valueDecrypt, 10);

            await this.email.sendPasswordFinal(createRegionDto, 'Endoso de Certificado');

            return this.userModel.create(createRegionDto);
          }
        }



      }
    } catch (e) {
      ////console.log(e);
    }


  }

  async findAll(): Promise<any[]> {
    return this.userModel.find({ statusGeneral: true }).exec();
  }

  async findAllRole(): Promise<any[]> {
    return this.userModel.find().exec();
  }


  async findOne(id: string): Promise<any> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRegionDto: UpdateUserDto): Promise<any> {
    return this.userModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete({ _id: id }).exec();
  }

}

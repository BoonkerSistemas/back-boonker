import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './schema/client.schema';
import { UsersService } from '../users/users.service';
import { RoleService } from '../role/role.service';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    private user: UsersService,
    private rol: RoleService,
  ) {
  }

  async create(createRegionDto: CreateClientDto): Promise<any> {
    try {
      let rol = await this.rol.findOne("65c83b53ab99158a665a4fdc")
      let user={
        name: createRegionDto.name + " "+ createRegionDto.lastName,
        rol: rol,
        realm: "string",
        username: createRegionDto.ruc,
        password: CryptoJS.AES.encrypt(
          createRegionDto.ruc,
         "B00nk3rconstrucciones"
        ).toString(),
        credentials: "string",
        challenges: "string",
        email: createRegionDto.emailPersonal,
        userVerified: true,
        statusGeneral: true,
        verificationToken: "string",
        status: true,
        picture: createRegionDto.picture?createRegionDto.picture: "",
        password1:createRegionDto.ruc
      }
      let users = await this.user.create(user)
      
      return this.clientModel.create(createRegionDto);



    } catch (e) {
      //////console.log(e);
    }


  }


  async createClient(createRegionDto: CreateClientDto): Promise<any> {
    try {
      let rol = await this.rol.findOne("65d21d4602d6f0ce1c6a721b")
      let user={
        name: createRegionDto.name + " "+ createRegionDto.lastName,
        rol: rol,
        realm: "string",
        username: createRegionDto.ruc,
        password: CryptoJS.AES.encrypt(
          createRegionDto.ruc,
          "B00nk3rconstrucciones"
        ).toString(),
        credentials: "string",
        challenges: "string",
        email: createRegionDto.emailPersonal,
        userVerified: true,
        statusGeneral: true,
        verificationToken: "string",
        status: true,
        picture: createRegionDto.picture?createRegionDto.picture: "",
        password1:createRegionDto.ruc
      }
      let users = await this.user.createFinal(user)
      
      return this.clientModel.create(createRegionDto);



    } catch (e) {
      //////console.log(e);
    }


  }


  async findAll(): Promise<any[]> {
    return this.clientModel.find().exec();
  }



  async findOne(id: string): Promise<any> {
    return this.clientModel.findOne({ _id: id }).exec();
  }

  async findRuc(ruc: string): Promise<any> {
    return this.clientModel.findOne({ ruc: ruc }).exec();
  }

  async findUsername(ruc: string): Promise<any> {
    
    return this.clientModel.findOne({ ruc: ruc }).exec();
  }

  async update(id: string, updateRegionDto: UpdateClientDto): Promise<any> {
    return this.clientModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.clientModel.findByIdAndDelete({ _id: id }).exec();
  }


}

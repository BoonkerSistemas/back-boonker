import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as bcrypt from 'bcryptjs';
import {JwtService} from '@nestjs/jwt';
import {SignUpDto} from './dto/signup.dto';
import {LoginDto} from './dto/login.dto';
import {User} from "../users/schemas/user.schemas";
import {UpdateUserDto} from "../users/dto/update-user.dto";
import * as CryptoJS from 'crypto-js';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {
    }

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
        const {
            name,
            role_id,
            realm,
            username,
            password,
            credentials,
            challenges,
            email,
            emailverified,
            verificationtoken,
            status,
        } = signUpDto;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            name,
            role_id,
            realm,
            username,
            credentials,
            challenges,
            email,
            emailverified,
            verificationtoken,
            status,
            password: hashedPassword,
        });

        const token = this.jwtService.sign({id: user._id});

        return {token: token};
    }

    async login(loginDto: LoginDto): Promise< any> {
        try{
            const {username, password} = loginDto;

            const valueDecryptName = username;
            const valueDecrypt = CryptoJS.AES.decrypt(password, "B00nk3rconstrucciones").toString(CryptoJS.enc.Utf8);

            if (!valueDecrypt) {
                return null;
            }
            loginDto.username = valueDecryptName



            let user = await this.userModel.findOne({username: valueDecryptName});

            if (!user) {

                throw new UnauthorizedException('Usuario incorrecto o contraseña');
            }
            if (user.status === false) {

                throw new UnauthorizedException('Usuario incorrecto o desactivado  ');
            }

            const isPasswordMatched = await bcrypt.compare(valueDecrypt, user.password);

            if (!isPasswordMatched) {

                throw new UnauthorizedException('Usuario incorrecto o contraseña');
            }

            const token = this.jwtService.sign({id: user._id});

            let jsonRes = {
                token: token,
                user: user
            }

            return {jsonRes};
        } catch (e) {
            return {msg: "Error", e}
        }

    }


    async findOneByNick(username: string): Promise<any> {
        return this.userModel.findOne({ email: username }).exec();
    }

    async update(id: string, updateRegionDto: UpdateUserDto): Promise<any> {
         updateRegionDto.password = await bcrypt.hash(updateRegionDto.password, 10);
         updateRegionDto.userVerified = true
        return this.userModel.findOneAndUpdate({ _id: id }, updateRegionDto, {
            new: true,
        });
    }


}

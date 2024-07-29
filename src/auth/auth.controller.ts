import {Body, Controller, HttpException, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import {ApiTags} from "@nestjs/swagger";
import {EmailService} from "../service/email.service";
import {RecoveryDto} from "./dto/recovery.dto";
import {UpdateUserDto} from "../users/dto/update-user.dto";
@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private readonly _emailService: EmailService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ jsonRes: string }> {
    return this.authService.login(loginDto);
  }

  @Post('recovery')
  async recoveryPass(@Body() dato: RecoveryDto) {
    const respuesta = await this.authService.findOneByNick(dato.email).then(result => result);
    if (respuesta) {
      dato.id = respuesta.id;
      let res =await this._emailService.sendEmailPassword(dato, 'Recuperación de Contraseña')
      return "ok";
    } else {
      throw new HttpException('¡No existe ningún usuario registrado con el correo ' + dato.email + ' !', HttpStatus.FORBIDDEN);
    }

  }

  @Patch('password/:id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateUserDto) {
    return this.authService.update(id, updateRegionDto);
  }

}

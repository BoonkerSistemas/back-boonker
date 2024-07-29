import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserSchema} from "../users/schemas/user.schemas";
import {JwtStrategy} from "./jwt.strategy";
import {EmailService} from "../service/email.service";
import {JwtService} from "../service/jwt.service";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: 'B00nk3r',
          signOptions: {
            expiresIn:  '3d',
          },
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, EmailService, JwtService],
  exports: [JwtStrategy, PassportModule, EmailService],
})
export class AuthModule {}

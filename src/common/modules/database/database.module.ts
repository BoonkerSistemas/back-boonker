import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {ConfigModule, ConfigService} from "@nestjs/config";


@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {

                const database = configService.get<string>('database.mongoDbURI')
                const databaseName = configService.get<string>('database.name')
                return {
                    uri: 'mongodb+srv://jcarrillo:YzB4j4HfETom9yNc@boonker.kzwfque.mongodb.net/',
                    dbName:'boonker'
                }
            },
            inject: [ConfigService],
        }),
    ],

    providers: [],
    exports: [MongooseModule]
})
export class DatabaseModule {}

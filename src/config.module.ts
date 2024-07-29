import { ConfigModule } from '@nestjs/config';
import configuration from "../config/configuration";
import * as Joi from 'joi';

export class BackendConfigModule {

    static forRoot() {
        const nodeEnv = process.env.NODE_ENV || 'production';
        const disableEnvFile = nodeEnv === 'production'; // Load env only for non-production environments

        const validations = Joi.object({
            NODE_ENV: Joi.string()
                .valid('development', 'production', 'test', 'provision')
                .default('development'),
            PORT: Joi.number().default(3005),
        })


        let options = {
            load: [configuration],
            ignoreEnvFile:false,
            validationSchema: validations,
            isGlobal: true,
            cache:false
        }
        if (disableEnvFile) {
            options.ignoreEnvFile = true
            options.cache= true
        }
        return ConfigModule.forRoot(options);
    }
}

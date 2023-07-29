import { Config } from './config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigSchema } from './config/shcema';

@Module({
  imports: [
    //  Config
    ConfigModule.forRoot({
      load:[Config],
      isGlobal: true,
      expandVariables: true,
      validationSchema: ConfigSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

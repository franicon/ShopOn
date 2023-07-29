import { Config } from './config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigSchema } from './config/shcema';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './providers/mongodb';

@Module({
  imports: [
    //  Config
    ConfigModule.forRoot({
      load: [Config],
      isGlobal: true,
      expandVariables: true,
      validationSchema: ConfigSchema,
    }),

    // MongoDb
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

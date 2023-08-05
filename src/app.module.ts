import { Config } from '@app';
import { ConfigSchema } from '@app';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './app/providers/mongodb';

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      load: [Config],
      isGlobal: true,
      expandVariables: true,
      validationSchema: ConfigSchema,
    }),

    // MongoDb
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

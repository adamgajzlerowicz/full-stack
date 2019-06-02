import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://db/rest'), UserModule],

  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://mongo/rest'),
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}

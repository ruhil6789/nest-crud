import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookMarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { configDotenv } from 'dotenv';
configDotenv
// import mongoose from 'mongoose';

@Module({
  imports: [AuthModule, UserModule, BookMarkModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  })
  ]
})
export class AppModule { }

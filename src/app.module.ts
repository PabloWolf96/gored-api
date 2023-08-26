import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { DatasourceModule } from './datasource/datasource.module';
import { PostgresService } from './postgres/postgres.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    UsersModule,
    DatasourceModule,
  ],

  controllers: [AppController],
  providers: [PostgresService],
})
export class AppModule {}

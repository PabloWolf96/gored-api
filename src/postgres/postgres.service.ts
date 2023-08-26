import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class PostgresService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/db/migrations/*.js'],
      synchronize: this.config.get('NODE_ENV') != 'production',
      password: this.config.get('PASSWORD'),
      username: this.config.get('DATABASE_USERNAME'),
      database: this.config.get('DATABASE_NAME'),
      port: +this.config.get('DB_PORT'),
    };
  }
}

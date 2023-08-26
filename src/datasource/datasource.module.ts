import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresService } from 'src/postgres/postgres.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresService,
    }),
  ],
  providers: [PostgresService],
})
export class DatasourceModule {}

import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MovieEntity } from 'src/movie/entities/movie.entity';

export async function getTypeOrmConfig(config: ConfigService): Promise<TypeOrmModuleOptions> {
    return {
        type: 'postgres',
        host: config.get<string>('PG_HOST'),
        port: parseInt(config.get<string>('PG_PORT') || '5432', 10),
        username: config.get<string>('PG_USER'),
        password: config.get<string>('PG_PASS'),  // Make sure this is not undefined
        database: config.get<string>('PG_DB'),
        entities: [MovieEntity],
        synchronize: true,
    }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';


@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity)
        private moviesRepository: Repository<MovieEntity>,
    ) { }

    async create(dto: MovieDto) {
        const movie = this.moviesRepository.create(dto)
        await this.moviesRepository.save(movie)
        return movie
    }
}

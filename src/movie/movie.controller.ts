import { Body, Controller, Get, Post, Query, Headers, Req } from '@nestjs/common';
import { MovieService } from './movie.service';
import type { Request } from 'express';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto)
  }

}

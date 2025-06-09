import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Headers,
  Req,
  Param,
  Put,
  Delete
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto)
  }

  @Get()
  findAll() {
    return this.movieService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.movieService.findOne(id)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.movieService.remove(id)
  }
}

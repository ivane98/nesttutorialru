import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) { }

  @Post()
  create(@Body() dto: CreateActorDto) {
    return this.actorService.create(dto)
  }

  @Get()
  findAll() {
    return this.actorService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.actorService.findOne(id)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: CreateActorDto) {
    return this.actorService.update(id, dto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.actorService.remove(id)
  }

}

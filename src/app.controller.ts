import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { StringToLowerPipe } from './pipes/string-to-lower.pipe';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @UsePipes(StringToLowerPipe)
  @Post()
  create(@Body("title") title: string) {
    return title
  }
}

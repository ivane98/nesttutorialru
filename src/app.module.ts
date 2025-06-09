import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MovieModule, ReviewModule, ActorModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}

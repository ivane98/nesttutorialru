import { IsNotEmpty, IsString } from 'class-validator';

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  description: string

  rating: number

  isAvaialable: boolean

  genre: Genre

  actorIds: string[]

  reviews: string[]

  @IsNotEmpty()
  releaseYear: number;
}

enum Genre {
  ACTION = 'action',
  DRAMA = 'drama',
  COMEDY = 'comedy',
  HORROR = 'horror'
}



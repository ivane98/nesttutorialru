import { IsNotEmpty, IsString } from 'class-validator';

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  releaseYear: number;
}

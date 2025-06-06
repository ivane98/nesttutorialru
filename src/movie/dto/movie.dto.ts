import { IsNotEmpty, IsString } from "class-validator"
import { Genre } from '../entities/movie.entity'; // adjust import if needed



export class MovieDto {
    @IsString()
    @IsNotEmpty()
    title: string
    @IsNotEmpty()
    releaseYear: number

    genre: Genre
}
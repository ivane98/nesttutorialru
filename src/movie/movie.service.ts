import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './dto/movie.dto';
import { Genre, Movie } from '@prisma/client';
import { CreateActorDto } from 'src/actor/dto/create-actor.dto';

@Injectable()
export class MovieService {
    constructor(private readonly prismaService: PrismaService) { }

    async create(dto: MovieDto) {
        return this.prismaService.movie.create({
            data: {
                title: dto.title,
                description: dto.description,
                releaseYear: dto.releaseYear,
                rating: dto.rating ?? 0,
                isAvailable: dto.isAvaialable ?? false,
                genre: dto.genre as unknown as Genre,

                actors: {
                    connect: dto.actorIds.map(id => ({ id })),
                },

                reviews: {
                    connect: dto.reviews.map(id => ({ id }))
                }

            },

            include: {
                actors: true,

            }


        })
    }

    async findAll() {
        return this.prismaService.movie.findMany()
    }

    async findOne(id: string) {
        return this.prismaService.movie.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: string, dto: MovieDto) {

        return this.prismaService.movie.update({
            where: {
                id
            },
            data: {
                title: dto.title,
                description: dto.description,
                releaseYear: dto.releaseYear,
                rating: dto.rating ?? 0,
                isAvailable: dto.isAvaialable ?? false,
                genre: dto.genre as unknown as Genre,
            }
        })

    }

    async remove(id: string) {
        return this.prismaService.movie.delete({
            where: {
                id
            }
        })
    }
}

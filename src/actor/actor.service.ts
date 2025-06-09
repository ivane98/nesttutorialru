import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActorDto } from './dto/create-actor.dto';

@Injectable()
export class ActorService {
    constructor(private readonly prismaService: PrismaService) { }

    async create(dto: CreateActorDto) {
        return await this.prismaService.actor.create({
            data: dto
        })
    }

    async findAll() {
        return await this.prismaService.actor.findMany()
    }

    async findOne(id: string) {
        return await this.prismaService.actor.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: string, dto: CreateActorDto) {
        return await this.prismaService.actor.update({
            where: {
                id
            },
            data: {
                ...dto
            }
        })
    }

    async remove(id: string) {
        return await this.prismaService.actor.delete({
            where: {
                id
            }
        })
    }
}

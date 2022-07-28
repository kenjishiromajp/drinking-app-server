import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardInput, UpdateCardInput } from 'src/types/graphql';

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}
  create({ numberOfPlayers, type, phrase }: CreateCardInput) {
    return this.prisma.card.create({
      data: { numberOfPlayers, type, phrase },
    });
  }

  findAll() {
    return this.prisma.card.findMany();
  }

  findOne(id: number) {
    return this.prisma.card.findUnique({
      where: { id },
      select: { numberOfPlayers: true, type: true, phrase: true },
    });
  }

  update(id: number, { phrase, numberOfPlayers, type }: UpdateCardInput) {
    return this.prisma.card.update({
      where: { id },
      data: { phrase, numberOfPlayers, type },
    });
  }

  remove(id: number) {
    return this.prisma.card.delete({
      where: { id },
    });
  }
}

-- CreateEnum
CREATE TYPE "DrinkingGameTypes" AS ENUM ('DoOrDrinkCard');

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "numberOfPlayers" INTEGER NOT NULL,
    "type" "DrinkingGameTypes" NOT NULL DEFAULT 'DoOrDrinkCard',
    "phrase" VARCHAR(255) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

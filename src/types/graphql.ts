
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum DrinkingGameTypes {
    DoOrDrinkCard = "DoOrDrinkCard"
}

export class CreateCardInput {
    numberOfPlayers: number;
    type: DrinkingGameTypes;
    phrase: string;
}

export class UpdateCardInput {
    id: number;
    numberOfPlayers: number;
    type: DrinkingGameTypes;
    phrase: string;
}

export class Card {
    id: number;
    numberOfPlayers: number;
    type: DrinkingGameTypes;
    phrase: string;
}

export abstract class IQuery {
    abstract cards(): Nullable<Card>[] | Promise<Nullable<Card>[]>;

    abstract card(id: number): Nullable<Card> | Promise<Nullable<Card>>;
}

export abstract class IMutation {
    abstract createCard(createCardInput: CreateCardInput): Card | Promise<Card>;

    abstract updateCard(updateCardInput: UpdateCardInput): Card | Promise<Card>;

    abstract removeCard(id: number): Nullable<Card> | Promise<Nullable<Card>>;
}

type Nullable<T> = T | null;

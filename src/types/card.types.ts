import { ProjectBase } from './shared.types.ts';

export interface CardType extends ProjectBase {
  image?: string;
}

export interface CardProps {
  content: CardType;
}

interface IFighter {
  objectID: string;
  name: string;
  universe: string;
  price: string;
  popular: boolean;
  rate: number;
  downloads: string;
  description: string;
  created_at: string;
  imageURL: string;
}

interface IFighterCard {
  item: IFighter;
  onPress: () => void;
}

type TFighters = IFighter[];

export type {IFighter, TFighters, IFighterCard};

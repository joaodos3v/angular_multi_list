type PokemonSprites = {
  front_default: string;
};

type PokemonAbility = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  abilities: PokemonAbility[];
}

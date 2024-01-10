import { Evolution } from "./evolution";
import { Name } from "./name";
import { Sexe } from "./sexe";
import { Sprites } from "./sprites";
import { Stats } from "./stats";
import { Talents } from "./talents";
import { TypePokemon } from "./typePokemon";

export type Pokemon = {
  pokedexId: number;
  generation: number;
  category: string;
  name: Name;
  sprites: Sprites;
  types: TypePokemon[];
  talents: Talents;
  stats: Stats;
  evolution: Evolution;
  height: string;
  weight: string;
  sexe: Sexe;
};

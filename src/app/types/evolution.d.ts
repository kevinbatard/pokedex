export type Evolution = {
  pre:
    | [
        {
          pokedexId: number;
          name: string;
          condition: string;
        }
      ]
    | null;
  next:
    | [
        {
          pokedexId: number;
          name: string;
          condition: string;
        }
      ]
    | null;
  mega:
    | [
        {
          pokedexId: number;
          name: string;
          condition: string;
        }
      ]
    | null;
};

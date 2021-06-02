import { Suspense } from 'react';
import { selector, selectorFamily, useRecoilValue } from 'recoil';

import PokemonButton from '../buttons/pokemon-name'
import * as Styled from './style';

import NESContainer from '../nes-container';
import { getAll, getOne } from '../../lib/pokemon';
import { inputAtom } from '../pokemon-input';

const pokemonAllQuery = selector(
  {
    key: 'pokemonAllQuery',
    get: async () => {
      const allPokemon = await getAll();
      return allPokemon;
    }
  }
);

export const pokemonFilterSelector = selectorFamily(
  {
    key: 'pokemonFilter',
    get: (allPokemons: Pokemon[]) => async ({ get }) => {
      try {
        const name = get(inputAtom);
        const results = allPokemons.filter((p) => p.name.includes(name));
        if (results.length) return results;

        const found = await getOne(name);
        return [found];
      } catch (e) {
        return [];
      }
    }
  }
);

const ListItem = ({ children }: WithChildren) => (
  <li className="my-4">
    { children }
  </li>
);

const List = () => {
  const pokemons = useRecoilValue(pokemonAllQuery);
  const filteredList = useRecoilValue(pokemonFilterSelector(pokemons));

  return (
    <>
      {
        !filteredList.length ?
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl">Not found</h1>
        </div>:
        null
      }
      <Styled.List>
        {
          filteredList.map((p) => (
              <ListItem key={p.id}>
                <PokemonButton id={p.id} name={p.name} />
              </ListItem>
          ))
        }
      </Styled.List>
    </>
  );
};

const PokemonList = () => (
  <NESContainer title="Choose your pokemon">
    <Styled.ListContainer>
        <Suspense fallback={<div>Loading pokemon database...</div>}>
          <List />
        </Suspense>
    </Styled.ListContainer>
  </NESContainer>
);

export default PokemonList;
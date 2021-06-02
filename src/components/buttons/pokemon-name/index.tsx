import { atom, useSetRecoilState } from 'recoil';

import * as Styled from './style';
import { PokemonButtonProps } from './types';

export const pokemonSelectedAtom = atom({
  key: 'PokemonSelectedAtom',
  default: 0
});

const PokemonButton = ({ id, name = 'Pokemon' }: PokemonButtonProps) => {
  const setPokemonSelected = useSetRecoilState(pokemonSelectedAtom);

  return (
    <Styled.Button
      onClick={() => setPokemonSelected(id)}
      enabled
    >
      { name }
    </Styled.Button>
  );
};

export default PokemonButton;
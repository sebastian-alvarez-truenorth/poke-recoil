import { Suspense } from 'react';

import { selector, useRecoilValue } from 'recoil';
import { getOne } from '../../lib/pokemon';
import { pokemonSelectedAtom } from '../buttons/pokemon-name';

import NESContainer from '../nes-container';

const pokemonDetailSelector = selector({
  key: 'pokemonDetailSelector',
  get: async ({ get }) => {
    const pokemonSelected = get(pokemonSelectedAtom);
    if (!pokemonSelected) return;

    return getOne(pokemonSelected);
  }
});

const PokemonDetailInfo = () => {
    const detail = useRecoilValue(pokemonDetailSelector);

    return (
        <>
            {
                detail ?
                <>
                    <h1 className="text-2xl">{ detail.name.toUpperCase() } - #{detail.id}</h1>
                    <ul className="mt-4">
                        {
                            detail?.types?.map((d, i) => <li key={i} className="text-xl">{ d }</li>)
                        }
                    </ul>
                    {
                        detail.picture ? 
                            <div className="flex justify-center">
                                <img src={detail.picture} width="400px" height="400px" />
                            </div> :
                            null
                    }
                </>:
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl">Select a Pokemon</p>
                </div>
            }
        </>
    );
};

const PokemonDetail = () => {

    return (
        <NESContainer title="Detail">
            <Suspense fallback={<div>Loading info...</div>}>
                <PokemonDetailInfo />
            </Suspense>
        </NESContainer>
    );
};

export default PokemonDetail;
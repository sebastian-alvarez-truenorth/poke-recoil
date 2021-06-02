import { atom, useRecoilState } from 'recoil';

export const inputAtom = atom<string>({
    key: 'inputAtom',
    default: ''
});

const PokemonInput = () => {
    const [pokemonName, setPokemonName] = useRecoilState(inputAtom);

    return (
            <div className="nes-field w-full mr-8">
                <label htmlFor="name_field">Search...</label>
                <input
                    type="text"
                    id="name_field"
                    className="nes-input"
                    onChange={(e) => setPokemonName(e.target.value)}
                    value={pokemonName}
                />
            </div>
    );
}

export default PokemonInput
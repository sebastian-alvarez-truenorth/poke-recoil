import PokemonDetail from '../../components/pokemon-detail';
import PokemonList from '../../components/pokemon-list';
import Pokeball from '../../components/pokeball';
import PokemonInput from '../../components/pokemon-input';

import * as Styled from './style';

const Header = () => (
    <Styled.Header>
        <div className="self-end">
            <Pokeball />
        </div>
        <PokemonInput />
    </Styled.Header>
);

const Main = () => (
    <>
        <div className="mr-4 mt-12">
            <PokemonList />
        </div>
        <div className="ml-4 mt-12">
            <PokemonDetail />
        </div>
    </>
);

const DefaultLayout = () => (
    <Styled.Layout>
        <Header />
        <Main />
    </Styled.Layout>
);

export default DefaultLayout;
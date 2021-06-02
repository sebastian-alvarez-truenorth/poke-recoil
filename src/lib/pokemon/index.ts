import pokemons from './pokemons.json';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const fetchData = async (url: string): Promise<any> => {
    const rawResponse = await fetch(url);
    const jsonResponse = await rawResponse.json();

    return jsonResponse;
};

/*
export const getAll = async (): Promise<Pokemon[]> => {
    const ps = pokemons.map((p) => {
        const pokemon: Pokemon = {
            id: p.id,
            name: p.name,
        };

        return pokemon;
    });

    return ps;
};
*/

export const getAll = async (): Promise<Pokemon[]> => {
    const jsonResponse = await fetchData(`${baseURL}?limit=151`);

    const ps: Pokemon[] = jsonResponse.results.map((p: any, i: number) => {
        const pathname = new URL(p.url).pathname;
        const order = pathname.split('/')[4];

        const pokemon: Pokemon = {
            id: parseInt(order),
            name: p.name,
        };

        return pokemon;
    });

    return ps;
};

export const getOne = async (term: number | string): Promise<Pokemon> => {
    const jsonResponse = await fetchData(`${baseURL}/${term}`);
    console.log(jsonResponse)

    const pokemon: Pokemon = {
        id: jsonResponse.id,
        name: jsonResponse.name,
        types: jsonResponse.types.map((t: any) => t.type.name),
        picture: jsonResponse.sprites.front_default,
    };

    return pokemon;
};
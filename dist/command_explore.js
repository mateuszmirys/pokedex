//import util from 'node:util';
export async function explore(state, locationName) {
    if (locationName === undefined) {
        console.log("You must type location name or ID");
    }
    else {
        const pokeapi = state.pokeapi;
        const location = await pokeapi.fetchLocation(locationName);
        console.log(`Exploring ${locationName}...`);
        console.log("Found Pokemon:");
        const pokemons = location.pokemon_encounters;
        //console.log(util.inspect(pokemons, {showHidden: false, depth: null, colors: true}));
        //console.log(`LOG location: ${location}`)
        for (const pokemon of pokemons) {
            const pokeName = pokemon.pokemon.name;
            console.log(` - ${pokeName}`);
        }
    }
}

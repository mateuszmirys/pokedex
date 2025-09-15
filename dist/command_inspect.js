export async function inspect(state, pokemonName) {
    const pokedex = state.pokedex;
    if (!pokedex[pokemonName]) {
        console.log("you have not caught that pokemon");
    }
    else {
        const stats = pokedex[pokemonName].stats;
        const types = pokedex[pokemonName].types;
        console.log(`Name: ${pokedex[pokemonName].name}`);
        console.log(`Height: ${pokedex[pokemonName].height}`);
        console.log(`Weigth: ${pokedex[pokemonName].weight}`);
        console.log("Stats:");
        for (let i = 0; i < stats.length; i++) {
            console.log(`  -${stats[i].stat.name}: ${stats[i].base_stat}`);
        }
        console.log("Types:");
        for (let i = 0; i < types.length; i++) {
            console.log(`  -${types[i].type.name}`);
        }
    }
}
;

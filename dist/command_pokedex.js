export async function pokedex(state) {
    console.log("Your Pokedex:");
    for (const mon in state.pokedex) {
        console.log(` -${mon}`);
    }
}
;

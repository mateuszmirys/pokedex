import { State } from './state.js';

export async function pokedex(state: State): Promise<void> {
    console.log("Your Pokedex:");
    for (const mon in state.pokedex) {
        console.log(` - ${mon}`);
    }
};
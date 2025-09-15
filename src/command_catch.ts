import type { State } from './state.js';
import { PokeAPI, Pokemon } from './pokeapi.js';

export async function catchPokemon(state: State, pokemonName: string): Promise<void> {
    const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
    const name = pokemonName.trim().toLowerCase();
    if (!name) {
        console.log("You must type name of the pokemon");
    } else {
        console.log(`Throwing a Pokeball at ${name}...`)
        const pokeapi = state.pokeapi;
        const pokedex = state.pokedex;

        try {
            const pokemon = await pokeapi.fetchPokemon(name);
            const catchChance = clamp(1 - (pokemon.base_experience / 200), 0.05, 0.9);
            if (Math.random() < catchChance) {
                pokedex[name] = pokemon;
                console.log(`${name} was caught!`);
            } else {
                console.log(`${name} escaped!`);
            }
        } catch {
            console.log("Error occured: Pokemon not found");
        }
    }
};
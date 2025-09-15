import { createInterface } from "readline";
import { getCommands } from "./getcommands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    const pokeapi = new PokeAPI;
    const pokedex = {};
    let nextLocationsURL = null;
    let prevLocationsURL = null;
    const newState = { rl, commands, pokeapi, nextLocationsURL, prevLocationsURL, pokedex };
    return newState;
}
;

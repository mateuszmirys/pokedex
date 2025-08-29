import { createInterface, type Interface } from "readline";
import { getCommands } from "./getcommands.js";
import { PokeAPI, ShallowLocations } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    commands: Record<string, CLICommand>;
    rl: Interface;
    pokeapi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    const pokeapi = new PokeAPI;
    let nextLocationsURL = null;
    let prevLocationsURL = null;
    const newState: State = {rl, commands, pokeapi, nextLocationsURL, prevLocationsURL}
    return newState;
};
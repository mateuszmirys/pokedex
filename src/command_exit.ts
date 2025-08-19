import { exit } from 'node:process';
import type { State } from './state.js';

export async function commandExit(state: State): Promise<void> {
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close();
    exit(0);
}
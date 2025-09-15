import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log("Welcome to the Pokedex!\nUsage:\n\n");
    const cmds = state.commands;
    for (const cmd in cmds) {
        console.log(`${cmds[cmd].name}: ${cmds[cmd].description}`);
    }
};
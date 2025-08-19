//import * as readline from 'node:readline';
import { initState, type State } from './state.js';

export function cleanInput(input: string): string[] {
    const toLowerCase = input.toLowerCase();
    const trim = toLowerCase.trim();
    const stringsArray = trim.split(" ");
    const refinedArray = [];
    for (let i = 0; i < stringsArray.length; i++) {
        if (stringsArray[i] !== "") {
            refinedArray.push(stringsArray[i]);
        } else {
            continue;
        }
    }
    
    return refinedArray;
}

export async function startREPL() {
    const newState: State = initState();
    newState.rl.prompt();
    newState.rl.on("line", async (input: string) => {
        const refined = cleanInput(input);
        if (refined.length === 0) {
            newState.rl.prompt();
            return;
        }
        const cmd = newState.commands[refined[0]];
        if (cmd !== null) {
            await cmd.callback(newState);
            } else {
                console.log("Unknown command");
            }
            newState.rl.prompt();
    })
}

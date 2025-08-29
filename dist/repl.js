//import * as readline from 'node:readline';
import { initState } from './state.js';
export function cleanInput(input) {
    const toLowerCase = input.toLowerCase();
    const trim = toLowerCase.trim();
    const stringsArray = trim.split(" ");
    const refinedArray = [];
    for (let i = 0; i < stringsArray.length; i++) {
        if (stringsArray[i] !== "") {
            refinedArray.push(stringsArray[i]);
        }
        else {
            continue;
        }
    }
    return refinedArray;
}
export async function startREPL() {
    const newState = initState();
    newState.rl.prompt();
    newState.rl.on("line", async (input) => {
        const refined = cleanInput(input);
        if (refined.length === 0) {
            newState.rl.prompt();
            return;
        }
        //console.log(refined);
        const cmd = newState.commands[refined[0]];
        if (cmd !== null) {
            await cmd.callback(newState, refined[1]);
        }
        else {
            console.log("Unknown command");
        }
        newState.rl.prompt();
    });
}

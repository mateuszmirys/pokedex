import { exit } from 'node:process';
export async function commandExit(state) {
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close();
    exit(0);
}

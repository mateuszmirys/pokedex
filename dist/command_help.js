export async function commandHelp(state) {
    console.log("Welcome to the Pokedex!\nUsage:\n\n");
    const cmds = state.commands;
    for (const cmd in cmds) {
        console.log(`${cmds[cmd].name}: ${cmds[cmd].description}`);
    }
}
;

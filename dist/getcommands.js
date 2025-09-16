import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { map } from "./command_map.js";
import { mapb } from "./command_mapb.js";
import { explore } from "./command_explore.js";
import { catchPokemon } from "./command_catch.js";
import { inspect } from "./command_inspect.js";
import { pokedex } from "./command_pokedex.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the names of 20 location areas in the Pokemon world.\nSubsequent map command displays the next 20 locations",
            callback: map,
        },
        mapb: {
            name: "mapb",
            description: "Displays the names of 20 previous location areas",
            callback: mapb,
        },
        explore: {
            name: "explore",
            description: "Explores Pokemons in chosen location",
            callback: explore,
        },
        catch: {
            name: "catch",
            description: "Tries to catch a Pokemon and add it to the Pokedex",
            callback: catchPokemon,
        },
        inspect: {
            name: "inspect",
            description: "Shows details about a catched Pokemon",
            callback: inspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Lists all your catched Pokemon",
            callback: pokedex,
        }
    };
}

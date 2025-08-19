import type { State } from './state.js';
import { PokeAPI } from './pokeapi.js';

export async function map(state: State): Promise<void> {
    const locations = state.pokeapi;
    if (state.nextLocationsURL === null) {
        const returnLocations = await locations.fetchLocations();
        state.nextLocationsURL = returnLocations.next;
        state.prevLocationsURL = returnLocations.previous;
        for (let i = 0; i < returnLocations.results.length; i++) {
            const location = returnLocations.results[i];
            console.log(location.name);
        }
    } else {
        const returnLocations = await locations.fetchLocations(state.nextLocationsURL);
        state.nextLocationsURL = returnLocations.next;
        state.prevLocationsURL = returnLocations.previous;
        for (let i = 0; i < returnLocations.results.length; i++) {
            const location = returnLocations.results[i];
            console.log(location.name);
        }
    }
}
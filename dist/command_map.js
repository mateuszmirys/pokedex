export async function map(state) {
    const locations = state.pokeapi;
    if (state.nextLocationsURL === null) {
        const returnLocations = await locations.fetchLocations();
        state.nextLocationsURL = returnLocations.next;
        state.prevLocationsURL = returnLocations.previous;
        for (let i = 0; i < returnLocations.results.length; i++) {
            const location = returnLocations.results[i];
            console.log(location.name);
        }
    }
    else {
        const returnLocations = await locations.fetchLocations(state.nextLocationsURL);
        state.nextLocationsURL = returnLocations.next;
        state.prevLocationsURL = returnLocations.previous;
        for (let i = 0; i < returnLocations.results.length; i++) {
            const location = returnLocations.results[i];
            console.log(location.name);
        }
    }
}

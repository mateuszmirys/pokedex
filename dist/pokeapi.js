export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const queryLocations = "/location-area/";
        try {
            if (pageURL) {
                const shallowLocations = await fetch(pageURL, {
                    method: "GET",
                });
                return shallowLocations.json();
            }
            else {
                const shallowLocations = await fetch(PokeAPI.baseURL + queryLocations, {
                    method: "GET",
                });
                return shallowLocations.json();
            }
        }
        catch {
            throw new Error();
        }
    }
    ;
    async fetchLocation(locationName) {
        try {
            const location = await fetch(PokeAPI.baseURL + "/" + locationName + "/", {
                method: "GET",
            });
            return location.json();
        }
        catch {
            throw new Error();
        }
    }
}
;

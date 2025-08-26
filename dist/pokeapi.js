import { Cache } from './pokecache.js';
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    cache = new Cache();
    async fetchLocations(pageURL) {
        const queryLocations = "/location-area/";
        try {
            if (pageURL) {
                const cachedResult = this.cache.get(pageURL);
                if (cachedResult !== undefined) {
                    //console.log(this.cache.get(pageURL));
                    return cachedResult;
                }
                else {
                    const shallowLocations = await fetch(pageURL, {
                        method: "GET",
                    });
                    const shallowLocationsJSON = shallowLocations.json();
                    this.cache.add(pageURL, shallowLocationsJSON);
                    return shallowLocationsJSON;
                }
            }
            else {
                const cachedResult = this.cache.get(queryLocations);
                if (cachedResult !== undefined) {
                    //console.log(this.cache.get(queryLocations));
                    return cachedResult;
                }
                else {
                    const query = PokeAPI.baseURL + queryLocations;
                    const shallowLocations = await fetch(query, {
                        method: "GET",
                    });
                    const shallowLocationsJSON = shallowLocations.json();
                    this.cache.add(query, shallowLocationsJSON);
                    return shallowLocationsJSON;
                }
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

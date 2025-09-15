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
            const query = PokeAPI.baseURL + "/location-area/" + locationName + "/";
            const cachedResult = this.cache.get(query);
            if (cachedResult) {
                return cachedResult;
            }
            else {
                const location = await fetch(query, {
                    method: "GET",
                });
                const locationJSON = location.json();
                this.cache.add(query, locationJSON);
                return locationJSON;
            }
        }
        catch {
            throw new Error();
        }
    }
    async fetchPokemon(pokemonName) {
        try {
            const query = PokeAPI.baseURL + "/pokemon/" + pokemonName + "/";
            const cachedResult = this.cache.get(query);
            if (cachedResult) {
                return cachedResult;
            }
            else {
                const pokemon = await fetch(query, {
                    method: "GET",
                });
                if (!pokemon.ok) {
                    throw new Error("Response not successful:" + pokemon.status);
                }
                const pokemonJSON = pokemon.json();
                this.cache.add(query, pokemonJSON);
                return pokemonJSON;
            }
        }
        catch {
            throw new Error();
        }
    }
    ;
}
;

import { Cache } from './pokecache.js'; 

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}
  cache = new Cache();
  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const queryLocations = "/location-area/";
    try {
        if (pageURL) {
            const cachedResult = this.cache.get<ShallowLocations>(pageURL);
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
         
        } else {
            const cachedResult = this.cache.get<ShallowLocations>(queryLocations);
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
  };

  async fetchLocation(locationName: string): Promise<Location> {
   try {
    const query = PokeAPI.baseURL + "/location-area/" + locationName + "/";
    const cachedResult = this.cache.get<Location>(query);
    if (cachedResult) {
        return cachedResult;
    }
    else {
        const location = await fetch (query, {
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
};

export type ShallowLocations = {
    count: number,
    next: string,
    previous: any,
    results: Location[]
};

export type Location = {
  game_index: number,
  id: number,
  location: string,
  name: string,
  pokemon_encounters: PokemonEncounter[]
};

export type PokemonEncounter = {
  pokemon: Pokemon
}

export type Pokemon = {
    name: string,
    url: string
};
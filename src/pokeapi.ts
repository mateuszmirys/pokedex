export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const queryLocations = "/location-area/";
    try {
        if (pageURL) {
            const shallowLocations = await fetch(pageURL, {
                method: "GET",
            });
            return shallowLocations.json();          
        } else { 
            const shallowLocations = await fetch(PokeAPI.baseURL + queryLocations, {
                method: "GET",
            });
            return shallowLocations.json();           
        }
    }
    catch {
        throw new Error();
    }
  };

  async fetchLocation(locationName: string): Promise<Location> {
   try {
    const location = await fetch (PokeAPI.baseURL + "/" + locationName + "/", {
        method: "GET",
    });
    return location.json();
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
  name: string,
  url: string
};
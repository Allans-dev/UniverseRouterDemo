
export const PLANET_DATA = "PLANET_DATA";

export function importPlanetData (data) {
  return {
    type: PLANET_DATA,
    payload: data
  }
}



export const PLANET_DATA = "PLANET_DATA";

export function importPlanetData (data) {
    return {
        type: PLANET_DATA,
        payload: data
  };
}

export const GATHER_NEIGHBOURS = "GATHER_NEIGHBOURS";

export function importNeighbourData (data) {
    console.log('action working');
    return {
        type: GATHER_NEIGHBOURS,
        payload: data
    };
}

export const GATHER_REGION = "GATHER_REGION";

export function importRegionData (data) {
    return {
        type: GATHER_REGION,
        payload: data
    };
}

export const GATHER_ALL = "GATHER_ALL";

export function importAllData (data) {
    return {
        type: GATHER_ALL,
        payload: data
    };
}
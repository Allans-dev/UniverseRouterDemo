
export const PLANET_DATA = "PLANET_DATA";

export function importPlanetData (data) {
    return {
        type: PLANET_DATA,
        payload: data
  };
}

export const UPDATE_DISPLAY = "UPDATE_DISPLAY";

export function importDisplayData (data) {
    console.log('action working');
    return {
        type: UPDATE_DISPLAY,
        payload: data
    };
}

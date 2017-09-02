import PLANET_DATA from '../actions';

const planetData = (state = {}, action) => {
  switch (action.type) {
    case "PLANET_DATA":
      return { list: action.payload };
  }
  return state;
};

export default planetData;

import UPDATE_DISPLAY from '../actions';

const displayData = (state = {}, action) => {
    console.log("reducer called!");
    switch (action.type) {
        case 'UPDATE_DISPLAY':
            console.log("reducer working!");
            return { list: action.payload };
    }
  return state;
};

export default displayData;
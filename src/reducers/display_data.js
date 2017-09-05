import GATHER_NEIGHBOURS from '../actions';
import GATHER_REGION from '../actions';
import GATHER_ALL from '../actions';

import _ from 'lodash';


const displayData = (state = {}, action) => {
    console.log("reducer called!")
    switch (action.type) {
        case 'GATHER_NEIGHBOURS':
            console.log("reducer working!");
//            let neighbours = _.mapkeys(action.payload, (value, keys) => {
//                                       return keys;
//                                       });
            return { display: 'neighbours' };
        case 'GATHER_REGION':
            return {};
        case 'GATHER_ALL':
            return {};
  }
  return state;
};

export default displayData;
import {combineReducers} from 'redux';
import signReducer from './reducerSign';
import zoneReducer from './reducerZone';
import mediaStatesReducer from './reducerMediaStates';
import transitionsReducer from './reducerTransitions';

const bangReducer = combineReducers({
    zones: zoneReducer,
    sign: signReducer,
    mediaStates: mediaStatesReducer,
    transitions: transitionsReducer
});

export default bangReducer;

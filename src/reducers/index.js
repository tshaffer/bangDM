import {combineReducers} from 'redux';
import signReducer from './reducerSign';
import zoneReducer from './reducerZone';
// import mediaStateReducer from './reducerMediaState';
// import transitionReducer from './reducerTransition';
//
const tdmReducer = combineReducers({
    zones: zoneReducer,
    sign: signReducer,
    // mediaStates: mediaStateReducer,
    // transitions: transitionReducer
});

export default tdmReducer;

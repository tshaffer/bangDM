import {combineReducers} from 'redux';
import signReducer from './reducerSign';
import zoneReducer from './reducerZone';
import mediaStatesReducer from './reducerMediaStates';
import contentItemsReducer from './reducerContentItems';
import transitionsReducer from './reducerTransitions';

const bangReducer = combineReducers({
    zones: zoneReducer,
    sign: signReducer,
    mediaStates: mediaStatesReducer,
    contentItems: contentItemsReducer,
    transitions: transitionsReducer
});

export default bangReducer;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import tdmReducer from './src/reducers/index';
import { newSign, newZone, addMediaState } from './src/actions/index';

import MediaState from './src/entities/mediaState';
import ContentItem from './src/entities/contentItem';

let store = createStore(tdmReducer, applyMiddleware(thunk));
store.dispatch(newSign('TestSign', "1920x1080x60p"));

let state = store.getState();
console.log("state:");
console.log(state);

let zoneAction = store.dispatch(newZone('Zone1', "images", true));

state = store.getState();
console.log("state:");
console.log(state);

const contentItem1 = new ContentItem("contentItem1", "media", "testFiles/image1.jpg");
const mediaState1 = new MediaState("mediaState1", contentItem1.id);
// specify zone!!
let addMediaStateAction = store.dispatch(addMediaState("mediaState1", mediaState1));

const contentItem2 = new ContentItem("contentItem2", "media", "testFiles/image2.jpg");
const mediaState2 = new MediaState("mediaState2", contentItem2.id);
addMediaStateAction = store.dispatch(addMediaState("mediaState2", mediaState2));

state = store.getState();
console.log("state:");
console.log(state);


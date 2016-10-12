import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import bangReducer from './src/reducers/index';
import { newSign, newZone, addMediaState, addContentItem, addTransition } from './src/actions/index';
import { getMediaStates } from './src/reducers/reducerZone';

import MediaState from './src/entities/mediaState';
import ContentItem from './src/entities/contentItem';
import Event from './src/entities/event';
import Transition from './src/entities/transition';

console.log("poop");

let store = createStore(bangReducer, applyMiddleware(thunk));
store.dispatch(newSign('TestSign', "1920x1080x60p"));

let state = store.getState();
console.log("state:");
console.log(state);

let zoneAction = store.dispatch(newZone('Zone1', "images", true));
let zoneId = zoneAction.payload.zoneId;

state = store.getState();
console.log("state:");
console.log(state);

const contentItem1 = new ContentItem("contentItem1", "media", "testFiles/image1.jpg");
store.dispatch(addContentItem(contentItem1));
const mediaState1 = new MediaState("mediaState1", contentItem1.id);
// specify zone!!
let addMediaStateAction = store.dispatch(addMediaState("mediaState1", mediaState1, zoneId));

const contentItem2 = new ContentItem("contentItem2", "media", "testFiles/image2.jpg");
store.dispatch(addContentItem(contentItem2));
const mediaState2 = new MediaState("mediaState2", contentItem2.id);
addMediaStateAction = store.dispatch(addMediaState("mediaState2", mediaState2, zoneId));

state = store.getState();
console.log("state:");
console.log(state);

const timeoutEvent1 = new Event("timeout", "timeout", 5);
// use objects instead of id's in app?
const transition1 = new Transition("m1To2", mediaState1.id, timeoutEvent1.id, mediaState2.id);
store.dispatch(addTransition(mediaState1, transition1, mediaState2));


const timeoutEvent2 = new Event("timeout", "timeout", 5);
const transition2 = new Transition("m2To1", mediaState2.id, timeoutEvent2.id, mediaState1.id);
store.dispatch(addTransition(mediaState2, transition2, mediaState1));

state = store.getState();
console.log("state:");
console.log(state);

const mediaStates = getMediaStates(state);
console.log("mediaStates");
console.log(mediaStates);

console.log("poopoo");

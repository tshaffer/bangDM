// Actions
export const NEW_SIGN = 'NEW_SIGN';
export const NEW_ZONE = 'NEW_ZONE';
export const ADD_MEDIA_STATE = 'ADD_MEDIA_STATE';
export const ADD_CONTENT_ITEM = 'ADD_CONTENT_ITEM';
export const ADD_TRANSITION = 'ADD_TRANSITION';
export const DELETE_TRANSITION = 'DELETE_TRANSITION';
export const ADD_EVENT = 'ADD_EVENT';

export const newSign = (name, mode) => ({
    type: NEW_SIGN,
    payload: {
        name: name,
        videoMode: mode
    }
});

export const newZone = (name, type, nonInteractive) => ({
    type: NEW_ZONE,
    payload: {
        name,
        type,
        nonInteractive
    }
});

export const addMediaState = ( name, mediaState, zoneId ) => ({
    type: ADD_MEDIA_STATE,
    payload: {
        name,
        mediaState,
        zoneId
    }
});

export const addContentItem = ( contentItem ) => ({
    type: ADD_CONTENT_ITEM,
    payload: {
        contentItem
    }
});

export const addTransition = ( sourceMediaState, transition, destinationMediaState ) => ({
    type: ADD_TRANSITION,
    payload: {
        sourceMediaState,
        transition,
        destinationMediaState
    }
});

export const deleteTransition = ( transitionId, ) => ({
    type: DELETE_TRANSITION,
    payload: {
        transitionId
    }
});

export const addEvent = ( event ) => ({
    type: ADD_EVENT,
    payload: {
        event
    }
})
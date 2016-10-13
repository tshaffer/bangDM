'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Actions
var NEW_SIGN = exports.NEW_SIGN = 'NEW_SIGN';
var NEW_ZONE = exports.NEW_ZONE = 'NEW_ZONE';
var ADD_MEDIA_STATE = exports.ADD_MEDIA_STATE = 'ADD_MEDIA_STATE';
var ADD_CONTENT_ITEM = exports.ADD_CONTENT_ITEM = 'ADD_CONTENT_ITEM';
var ADD_TRANSITION = exports.ADD_TRANSITION = 'ADD_TRANSITION';
var DELETE_TRANSITION = exports.DELETE_TRANSITION = 'DELETE_TRANSITION';
var ADD_EVENT = exports.ADD_EVENT = 'ADD_EVENT';

var newSign = exports.newSign = function newSign(name, mode) {
    return {
        type: NEW_SIGN,
        payload: {
            name: name,
            videoMode: mode
        }
    };
};

var newZone = exports.newZone = function newZone(name, type, nonInteractive) {
    return {
        type: NEW_ZONE,
        payload: {
            name: name,
            type: type,
            nonInteractive: nonInteractive
        }
    };
};

var addMediaState = exports.addMediaState = function addMediaState(name, mediaState, zoneId) {
    return {
        type: ADD_MEDIA_STATE,
        payload: {
            name: name,
            mediaState: mediaState,
            zoneId: zoneId
        }
    };
};

var addContentItem = exports.addContentItem = function addContentItem(contentItem) {
    return {
        type: ADD_CONTENT_ITEM,
        payload: {
            contentItem: contentItem
        }
    };
};

var addTransition = exports.addTransition = function addTransition(sourceMediaState, transition, destinationMediaState) {
    return {
        type: ADD_TRANSITION,
        payload: {
            sourceMediaState: sourceMediaState,
            transition: transition,
            destinationMediaState: destinationMediaState
        }
    };
};

var deleteTransition = exports.deleteTransition = function deleteTransition(transitionId) {
    return {
        type: DELETE_TRANSITION,
        payload: {
            transitionId: transitionId
        }
    };
};

var addEvent = exports.addEvent = function addEvent(event) {
    return {
        type: ADD_EVENT,
        payload: {
            event: event
        }
    };
};
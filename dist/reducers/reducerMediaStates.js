'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    var newState = void 0;
    var newMediaStatesById = void 0;

    var name = void 0;

    var type = action.type;
    var payload = action.payload;


    switch (type) {

        case _index.ADD_MEDIA_STATE:

            newMediaStatesById = Object.assign({}, state.mediaStatesById);

            var mediaState = payload.mediaState;

            newMediaStatesById[mediaState.id] = mediaState;

            newState = {
                mediaStatesById: newMediaStatesById
            };
            return newState;

        case _index.ADD_TRANSITION:
            var sourceMediaState = payload.sourceMediaState;
            var transition = payload.transition;
            var destinationMediaState = payload.destinationMediaState;


            newMediaStatesById = Object.assign({}, state.mediaStatesById);

            var newSourceMediaState = Object.assign({}, sourceMediaState);
            newSourceMediaState.transitionOutIds.push(transition);

            var newDestinationMediaState = Object.assign({}, destinationMediaState);
            newDestinationMediaState.transitionInIds.push(transition);

            newMediaStatesById[newSourceMediaState.id] = newSourceMediaState;
            newMediaStatesById[newDestinationMediaState.id] = newDestinationMediaState;

            newState = {
                mediaStatesById: newMediaStatesById
            };
            return newState;
    }

    return state;
};

var _index = require('../actions/index');

var _mediaState = require('../entities/mediaState');

var _mediaState2 = _interopRequireDefault(_mediaState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    mediaStatesById: {}
};
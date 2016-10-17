'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    var newState = void 0;
    var newMediaStatesById = void 0;

    var name = void 0;

    var type = action.type;
    var payload = action.payload;

    var _ret = function () {

        switch (type) {

            case _index.ADD_MEDIA_STATE:

                newMediaStatesById = Object.assign({}, state.mediaStatesById);

                var mediaState = payload.mediaState;

                newMediaStatesById[mediaState.id] = mediaState;

                newState = {
                    mediaStatesById: newMediaStatesById
                };
                return {
                    v: newState
                };

            case _index.ADD_TRANSITION:
                var sourceMediaState = payload.sourceMediaState;
                var transition = payload.transition;
                var destinationMediaState = payload.destinationMediaState;


                newMediaStatesById = Object.assign({}, state.mediaStatesById);

                var newSourceMediaState = Object.assign({}, sourceMediaState);
                newSourceMediaState.transitionOutIds.push(transition.id);

                var newDestinationMediaState = Object.assign({}, destinationMediaState);
                newDestinationMediaState.transitionInIds.push(transition.id);

                newMediaStatesById[newSourceMediaState.id] = newSourceMediaState;
                newMediaStatesById[newDestinationMediaState.id] = newDestinationMediaState;

                newState = {
                    mediaStatesById: newMediaStatesById
                };
                return {
                    v: newState
                };

            case _index.DELETE_TRANSITION:

                var idOfTransitionToDelete = payload.transitionId;

                newMediaStatesById = Object.assign({}, state.mediaStatesById);

                var _loop = function _loop(mediaStateId) {
                    var mediaState = newMediaStatesById[mediaStateId];

                    mediaState.transitionInIds.forEach(function (transitionInId, index) {
                        if (transitionInId == idOfTransitionToDelete) {
                            mediaState.transitionInIds.splice(index, 1);
                            return;
                        }
                    });
                    mediaState.transitionOutIds.forEach(function (transitionOutId, index) {
                        if (transitionOutId == idOfTransitionToDelete) {
                            mediaState.transitionOutIds.splice(index, 1);
                            return;
                        }
                    });
                };

                for (var mediaStateId in newMediaStatesById) {
                    _loop(mediaStateId);
                }

                newState = {
                    mediaStatesById: newMediaStatesById
                };
                return {
                    v: newState
                };
        }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    return state;
};

var _index = require('../actions/index');

var _mediaState = require('../entities/mediaState');

var _mediaState2 = _interopRequireDefault(_mediaState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    mediaStatesById: {}
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyZone;
    var action = arguments[1];
    var type = action.type;
    var payload = action.payload;


    var newZone = void 0;
    var name = void 0;

    switch (type) {
        case _index.NEW_ZONE:
            name = payload.name;
            var zoneType = payload.zoneType;
            var nonInteractive = payload.nonInteractive;


            newZone = new _zone2.default(name, zoneType, nonInteractive);
            action.payload.zoneId = newZone.id;
            return newZone;

        case _index.ADD_MEDIA_STATE:
            name = payload.name;
            var mediaState = payload.mediaState;


            newZone = Object.assign(emptyZone, state);

            var mediaStateIds = Object.assign([], state.mediaStateIds);
            mediaStateIds.push(mediaState.id);

            var mediaStatesById = Object.assign({}, state.mediaStatesById);
            mediaStatesById[mediaState.id] = mediaState;

            newZone.mediaStateIds = mediaStateIds;
            newZone.mediaStatesById = mediaStatesById;

            if (!newZone.initialMediaStateId || newZone.initialMediaStateId == "") {
                newZone.initialMediaStateId = mediaState.id;
            }
            return newZone;

        // case ADD_TRANSITION:
        //
        //     let { sourceMediaState, transition, destinationMediaState } = payload;
        //
        //     newZone = Object.assign(emptyZone, state);
        //
        //     let newSoureMediaState = newZone.mediaStatesById[sourceMediaState.id];
        //     newSourceMediaState.transitionOutIds.push(transition.id);
        //
        //     let newDestinationMediaState = newZone.mediaStatesById[targetMediaState.id];
        //     newDestinationMediaState.transitionInIds.push(transition.id);
        //
        //     return newZone;
    }

    return state;
};

var _index = require('../actions/index');

var _zone = require('../entities/zone');

var _zone2 = _interopRequireDefault(_zone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyZone = new _zone2.default("Untitled", "images", true);
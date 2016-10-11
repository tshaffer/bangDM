'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var type = action.type;
    var payload = action.payload;


    var newState = void 0;

    var newZone = void 0;
    var name = void 0;

    switch (type) {
        case _index.NEW_ZONE:

            name = payload.name;
            var zoneType = payload.zoneType;
            var nonInteractive = payload.nonInteractive;


            newState = Object.assign({}, state);

            _newZone = new _zone2.default(name, zoneType, nonInteractive);
            action.payload.zoneId = _newZone.id;

            newState.zonesById[_newZone.id] = _newZone;
            return newState;

        case _index.ADD_MEDIA_STATE:

            console.log("pooppoop");

            name = payload.name;
            var mediaState = payload.mediaState;
            var zoneId = payload.zoneId;


            var zone = state.zonesById[zoneId];
            var _newZone = Object.assign({}, zone);

            var mediaStateIds = Object.assign([], zone.mediaStateIds);
            mediaStateIds.push(mediaState.id);

            var mediaStatesById = Object.assign({}, zone.mediaStatesById);
            mediaStatesById[mediaState.id] = mediaState;

            _newZone.mediaStateIds = mediaStateIds;
            _newZone.mediaStatesById = mediaStatesById;

            if (!_newZone.initialMediaStateId || _newZone.initialMediaStateId == "") {
                _newZone.initialMediaStateId = mediaState.id;
            }

            newState = Object.assign({}, state);
            newState.zonesById[_newZone.id] = _newZone;
            return newState;
    }

    return state;
};

var _index = require('../actions/index');

var _zone = require('../entities/zone');

var _zone2 = _interopRequireDefault(_zone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    zonesById: {}
};
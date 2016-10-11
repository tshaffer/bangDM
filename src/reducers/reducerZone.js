import { NEW_ZONE, ADD_MEDIA_STATE, ADD_TRANSITION } from '../actions/index';

import Zone from '../entities/zone';

const initialState =
{
    zonesById: {}
};


export default function(state = initialState, action) {

    const {type, payload} = action;

    let newState;

    let newZone;
    let name;

    switch (type) {
        case NEW_ZONE:

            name = payload.name;
            let { zoneType, nonInteractive} = payload;

            newState = Object.assign({}, state);

            newZone = new Zone(name, zoneType, nonInteractive);
            action.payload.zoneId = newZone.id;

            newState.zonesById[newZone.id] = newZone;
            return newState;

        case ADD_MEDIA_STATE:

            console.log("pooppoop");

            name = payload.name;
            let {  mediaState, zoneId } = payload;

            let zone = state.zonesById[zoneId];
            let newZone = Object.assign({}, zone);

            let mediaStateIds = Object.assign([], zone.mediaStateIds);
            mediaStateIds.push(mediaState.id);

            let mediaStatesById = Object.assign({}, zone.mediaStatesById);
            mediaStatesById[mediaState.id] = mediaState;

            newZone.mediaStateIds = mediaStateIds;
            newZone.mediaStatesById = mediaStatesById;

            if (!newZone.initialMediaStateId || newZone.initialMediaStateId == "") {
                newZone.initialMediaStateId = mediaState.id;
            }

            newState = Object.assign({}, state);
            newState.zonesById[newZone.id] = newZone;
            return newState;
    }

    return state;
}

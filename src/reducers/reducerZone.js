import { NEW_ZONE, ADD_MEDIA_STATE } from '../actions/index';

import Zone from '../entities/zone';

const emptyZone = new Zone("Untitled", "images", true);

export default function(state = emptyZone, action) {

    const {type, payload} = action;

    let newZone;
    let name;

    switch (type) {
        case NEW_ZONE:
            name = payload.name;
            let { zoneType, nonInteractive} = payload;

            newZone = new Zone(name, zoneType, nonInteractive);
            action.payload.zoneId = newZone.id;
            return newZone;

        case ADD_MEDIA_STATE:
            name = payload.name;
            let {  mediaState } = payload;

            newZone = Object.assign(emptyZone, state);

            let mediaStateIds = Object.assign([], state.mediaStateIds);
            mediaStateIds.push(mediaState.id);

            let mediaStatesById = Object.assign({}, state.mediaStatesById);
            mediaStatesById[mediaState.id] = mediaState;

            newZone.mediaStateIds = mediaStateIds;
            newZone.mediaStatesById = mediaStatesById;

            if (!newZone.initialMediaStateId || newZone.initialMediaStateId == "") {
                newZone.initialMediaStateId = mediaState.id;
            }
            return newZone;
    }

    return state;
}

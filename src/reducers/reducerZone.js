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

// Selectors

// export const getZoneById = (state, props) => {
//     let zoneState = state.zones.zonesById[props.id];
//
//     if (zoneState) {
//         const zone = new Zone(zoneState);
//         return zone;
//     }
//     else {
//         return undefined;
//     }
// }

// should be a zone parameter as well
export const getMediaStates = (state)  => {

    console.log("poopoo");

    let mediaStates = [];

    // the state that is currently passed in is the entire state, not just the zones portion
    const zones = state.zones;
    const zonesById = zones.zonesById;

    // cheating - only one zone
    for (let zoneId in zonesById) {
        const zone = zonesById[zoneId];
        let mediaState = zone.mediaStatesById[zone.initialMediaStateId];
        while (mediaState) {
            mediaStates.push(mediaState);
            const transitionOutIds = { mediaState };
            if (transitionOutIds.length === 0) {
                mediaState = null;
            }
            const targetMediaStateId = transitionOutIds[0];
            // check that targetMediaStateId exists - safe programming
            mediaState = zone.mediaStatesById[targetMediaStateId];
        }
    }

    return mediaStates;
}
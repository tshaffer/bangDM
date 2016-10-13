import { ADD_MEDIA_STATE, ADD_TRANSITION, DELETE_TRANSITION } from '../actions/index';

import MediaState from '../entities/mediaState';

const initialState =
{
    mediaStatesById: {}
};


export default function(state = initialState, action) {

    let newState;
    let newMediaStatesById;

    let name;

    const {type, payload} = action;

    switch (type) {

        case ADD_MEDIA_STATE:

            newMediaStatesById = Object.assign({}, state.mediaStatesById);

            let { mediaState } = payload;
            newMediaStatesById[mediaState.id] = mediaState;

            newState = {
                mediaStatesById: newMediaStatesById
            };
            return newState;

        case ADD_TRANSITION:

            let { sourceMediaState, transition, destinationMediaState } = payload;

            newMediaStatesById = Object.assign({}, state.mediaStatesById);

            let newSourceMediaState = Object.assign({}, sourceMediaState);
            newSourceMediaState.transitionOutIds.push(transition.id);

            let newDestinationMediaState = Object.assign({}, destinationMediaState);
            newDestinationMediaState.transitionInIds.push(transition.id);

            newMediaStatesById[newSourceMediaState.id] = newSourceMediaState;
            newMediaStatesById[newDestinationMediaState.id] = newDestinationMediaState;

            newState = {
                mediaStatesById: newMediaStatesById
            };
            return newState;

        case DELETE_TRANSITION:

            const idOfTransitionToDelete = payload.transitionId;

            newMediaStatesById = Object.assign({}, state.mediaStatesById);

            for (let mediaStateId in newMediaStatesById) {
                let mediaState = newMediaStatesById[mediaStateId];

                mediaState.transitionInIds.forEach( (transitionInId, index) => {
                    if (transitionInId == idOfTransitionToDelete) {
                        mediaState.transitionInIds.splice(index, 1);
                        return;
                    }
                });
                mediaState.transitionOutIds.forEach( (transitionOutId, index) => {
                    if (transitionOutId == idOfTransitionToDelete) {
                        mediaState.transitionOutIds.splice(index, 1);
                        return;
                    }
                });
            }

            newState = {
                mediaStatesById: newMediaStatesById
            };
            return newState;
    }

    return state;
}

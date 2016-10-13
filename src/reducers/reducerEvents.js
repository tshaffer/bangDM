import { ADD_EVENT } from '../actions/index';

import Event from '../entities/event';

const initialState =
{
    eventsById: {}
};


export default function(state = initialState, action) {

    let newState;
    let newEventsById;

    const {type, payload} = action;

    switch (type) {

        case ADD_EVENT:

            newEventsById = Object.assign({}, state.eventsById);

            let { event } = payload;
            newEventsById[event.id] = event;

            newState = {
                eventsById: newEventsById
            };
            return newState;
    }

    return state;
}

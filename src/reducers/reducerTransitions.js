import { ADD_TRANSITION } from '../actions/index';
import { DELETE_TRANSITION } from '../actions/index';

import Transition from '../entities/transition';

const initialState =
{
    transitionsById: {}
};

export default function(state = initialState, action) {

    let newState;
    let newTransitionsById;

    let name;

    const {type, payload} = action;

    switch (type) {

        case ADD_TRANSITION:

            let { transition } = payload;

            newTransitionsById = Object.assign({}, state.transitionsById);

            newTransitionsById[transition.id] = transition;

            newState = {
                transitionsById: newTransitionsById
            };
            return newState;

        case DELETE_TRANSITION:

            newTransitionsById = Object.assign({}, state.transitionsById);

            delete newTransitionsById[payload.transitionId];

            newState = {
                transitionsById: newTransitionsById
            };
            return newState;
    }

    return state;
}

import { ADD_TRANSITION } from '../actions/index';

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

            return newTransitionsById;
    }

    return state;
}

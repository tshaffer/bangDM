import { NEW_SIGN, NEW_ZONE } from '../actions/index';

import Sign from '../entities/sign';

const emptySign = new Sign("Untitled", "1920x1080x60p");

export default function(state = emptySign, {type, payload}) {

    switch (type) {
        case NEW_SIGN:
            let {name, videoMode} = payload;
            return new Sign(name, videoMode);
        case NEW_ZONE:
            let {zoneId} = payload;
            let zoneIds = Object.assign([], state.zoneIds);
            zoneIds.push(zoneId);
            let newState = Object.assign({}, state);
            newState.zoneIds = zoneIds;
            return newState;
    }

    return state;
}

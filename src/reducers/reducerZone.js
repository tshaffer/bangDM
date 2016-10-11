import { NEW_ZONE } from '../actions/index';

import Zone from '../entities/zone';

const emptyZone = new Zone("Untitled", "images", true);

export default function(state = emptyZone, action) {

    const {type, payload} = action;

    switch (type) {
        case NEW_ZONE:
            let {name, zoneType, nonInteractive} = payload;
            let newZone = new Zone(name, zoneType, nonInteractive);
            action.zoneId = newZone.id;
            return newZone;
    }

    return state;
}

import { NEW_ZONE } from '../actions/index';

import Zone from '../entities/zone';

const emptyZone = new Zone("Untitled", "images", true);

export default function(state = emptyZone, {type, payload}) {

    switch (type) {
        case NEW_ZONE:
            let {name, zoneType, nonInteractive} = payload;
            return new Zone(name, zoneType, nonInteractive);
    }

    return state;
}

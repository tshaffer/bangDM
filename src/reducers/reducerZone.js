import { NEW_ZONE } from '../actions/index';

import Zone from '../entities/zone';

const emptyZone = new Zone("Untitled", "images", true);

// export default function(state = emptyZone, {type, payload}) {
export default function(state = emptyZone, action) {

    console.log("poopoo");

    switch (action.type) {
        case NEW_ZONE:
            // let {name, type, nonInteractive} = payload;
            let {name, type, nonInteractive} = action.payload;
            return new Zone(name, type, nonInteractive);
    }

    return state;
}

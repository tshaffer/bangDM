import { NEW_SIGN } from '../actions/index';

import Sign from '../entities/sign';

const emptySign = new Sign("Untitled", "1920x1080x60p");

export default function(state = emptySign, {type, payload}) {

    switch (type) {
        case NEW_SIGN:
            let {name, videoMode} = payload;
            return new Sign(name, videoMode);
    }

    return state;
}

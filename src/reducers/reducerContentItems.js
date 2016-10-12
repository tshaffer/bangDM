import { ADD_CONTENT_ITEM } from '../actions/index';

import ContentItem from '../entities/contentItem';

const initialState =
{
    contentItemsById: {}
};

export default function(state = initialState, action) {

    let newState;
    let newContentItemsById;

    const {type, payload} = action;

    switch (type) {

        case ADD_CONTENT_ITEM:

            newContentItemsById = Object.assign({}, state.contentItemsById);

            let { contentItem } = payload;

            newContentItemsById[contentItem.id] = contentItem;

            newState = {
                contentItemsById: newContentItemsById
            };
            return newState;
    }

    return state;
}

// fake Selectors
export const getContentItem = (state, contentItemId)  => {
    return state.contentItems.contentItemsById[contentItemId];
}

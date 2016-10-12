'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContentItem = undefined;

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    var newState = void 0;
    var newContentItemsById = void 0;

    var type = action.type;
    var payload = action.payload;


    switch (type) {

        case _index.ADD_CONTENT_ITEM:

            newContentItemsById = Object.assign({}, state.contentItemsById);

            var contentItem = payload.contentItem;


            newContentItemsById[contentItem.id] = contentItem;

            newState = {
                contentItemsById: newContentItemsById
            };
            return newState;
    }

    return state;
};

var _index = require('../actions/index');

var _contentItem = require('../entities/contentItem');

var _contentItem2 = _interopRequireDefault(_contentItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    contentItemsById: {}
};

// fake Selectors
var getContentItem = exports.getContentItem = function getContentItem(state, contentItemId) {
    return state.contentItems.contentItemsById[contentItemId];
};
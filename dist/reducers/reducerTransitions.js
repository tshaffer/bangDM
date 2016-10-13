'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    var newState = void 0;
    var newTransitionsById = void 0;

    var name = void 0;

    var type = action.type;
    var payload = action.payload;


    switch (type) {

        case _index.ADD_TRANSITION:
            var transition = payload.transition;


            newTransitionsById = Object.assign({}, state.transitionsById);

            newTransitionsById[transition.id] = transition;

            newState = {
                transitionsById: newTransitionsById
            };
            return newState;

        case _index.DELETE_TRANSITION:

            newTransitionsById = Object.assign({}, state.transitionsById);

            delete newTransitionsById[payload.transitionId];

            newState = {
                transitionsById: newTransitionsById
            };
            return newState;
    }

    return state;
};

var _index = require('../actions/index');

var _transition = require('../entities/transition');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    transitionsById: {}
};
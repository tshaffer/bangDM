'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducerSign = require('./reducerSign');

var _reducerSign2 = _interopRequireDefault(_reducerSign);

var _reducerZone = require('./reducerZone');

var _reducerZone2 = _interopRequireDefault(_reducerZone);

var _reducerMediaStates = require('./reducerMediaStates');

var _reducerMediaStates2 = _interopRequireDefault(_reducerMediaStates);

var _reducerTransitions = require('./reducerTransitions');

var _reducerTransitions2 = _interopRequireDefault(_reducerTransitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tdmReducer = (0, _redux.combineReducers)({
    zones: _reducerZone2.default,
    sign: _reducerSign2.default,
    mediaStates: _reducerMediaStates2.default,
    transitions: _reducerTransitions2.default
});

exports.default = tdmReducer;
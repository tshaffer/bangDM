'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducerSign = require('./reducerSign');

var _reducerSign2 = _interopRequireDefault(_reducerSign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import zoneReducer from './reducerZone';
// import mediaStateReducer from './reducerMediaState';
// import transitionReducer from './reducerTransition';
//
var tdmReducer = (0, _redux.combineReducers)({
    sign: _reducerSign2.default
});

exports.default = tdmReducer;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utilities/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function Event(name, type, data) {
    _classCallCheck(this, Event);

    this.id = (0, _utils.guid)();
    this.name = name;
    this.type = type;
    this.data = data;
};

exports.default = Event;
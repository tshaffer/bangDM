'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utilities/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zone = function Zone(name, type, nonInteractive) {
    _classCallCheck(this, Zone);

    this.id = (0, _utils.guid)();
    this.name = name;
    this.type = type;
    this.nonInteractive = nonInteractive;
    this.initialMediaStateId = null;
    this.mediaStateIds = [];
    this.mediaStatesById = {};
};

exports.default = Zone;
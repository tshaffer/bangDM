'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utilities/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transition = function Transition(name, sourceMediaStateId, eventId, targetMediaStateId) {
    _classCallCheck(this, Transition);

    this.id = (0, _utils.guid)();
    this.name = name;
    this.sourceMediaStateId = sourceMediaStateId;
    this.eventId = eventId;
    this.targetMediaStateId = targetMediaStateId;
};

exports.default = Transition;
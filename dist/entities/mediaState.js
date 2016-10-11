'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utilities/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaState = function MediaState(name, contentItemId) {
    _classCallCheck(this, MediaState);

    this.id = (0, _utils.guid)();
    this.name = name;
    this.contentItemId = contentItemId;
    this.transitionInIds = [];
    this.transitionOutIds = [];
};

exports.default = MediaState;
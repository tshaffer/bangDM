'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utilities/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentItem = function ContentItem(name, type, path) {
    _classCallCheck(this, ContentItem);

    this.id = (0, _utils.guid)();
    this.name = name;
    this.type = type;
    this.path = path;
};

exports.default = ContentItem;
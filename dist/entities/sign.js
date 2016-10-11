"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require("../utilities/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sign = function Sign() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var videoMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1920x1080x60p";

    _classCallCheck(this, Sign);

    this.id = (0, _utils.guid)();
    this.name = name;
    this.videoMode = videoMode;
    this.zoneIds = [];
};

exports.default = Sign;
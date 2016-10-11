'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptySign;
    var _ref = arguments[1];
    var type = _ref.type;
    var payload = _ref.payload;


    switch (type) {
        case _index.NEW_SIGN:
            var name = payload.name;
            var videoMode = payload.videoMode;

            return new _sign2.default(name, videoMode);
    }

    return state;
};

var _index = require('../actions/index');

var _sign = require('../entities/sign');

var _sign2 = _interopRequireDefault(_sign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptySign = new _sign2.default("Untitled", "1920x1080x60p");
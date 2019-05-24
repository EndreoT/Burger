"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertToBoolean(input) {
    try {
        return JSON.parse(input);
    }
    catch (err) {
        return false;
    }
}
exports.convertToBoolean = convertToBoolean;
function convertToInteger(input) {
    let result = Number(input);
    if (isNaN(result) || !Number.isInteger(result)) {
        result = -1;
    }
    return result;
}
exports.convertToInteger = convertToInteger;
//# sourceMappingURL=utils.js.map
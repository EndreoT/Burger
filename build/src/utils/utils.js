"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertStringToBoolean(input) {
    try {
        const result = JSON.parse(input);
        if (result >= 1) {
            return true;
        }
        return false;
    }
    catch (err) {
        return false;
    }
}
exports.convertStringToBoolean = convertStringToBoolean;
function convertToInteger(input) {
    let result = Number(input);
    if (isNaN(result) || !Number.isInteger(result)) {
        result = -1;
    }
    return result;
}
exports.convertToInteger = convertToInteger;
//# sourceMappingURL=utils.js.map
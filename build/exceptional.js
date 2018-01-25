"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./lib/exceptions");
class Exceptional {
    /**
     * Private constructor.
     */
    constructor(_namespace) {
        this._namespace = _namespace;
    }
    static create(ns) {
        return new Exceptional(ns);
    }
    ServerException(code, payload) {
        return this._instantiate(exceptions_1.ServerException, code, payload);
    }
    DomainException(code, payload) {
        return this._instantiate(exceptions_1.DomainException, code, payload);
    }
    ConflictException(code, payload) {
        return this._instantiate(exceptions_1.ConflictException, code, payload);
    }
    NotFoundException(code, payload) {
        return this._instantiate(exceptions_1.NotFoundException, code, payload);
    }
    InputValidationException(code, payload) {
        return this._instantiate(exceptions_1.InputValidationException, code, payload);
    }
    /**
     * Format an exception.
     */
    format(ex) {
        return this._namespace.render(ex) + ex.stack;
    }
    _instantiate(cTor, code, payload) {
        return new cTor({
            namespace: this._namespace.name,
            code: code,
            payload: payload
        });
    }
}
exports.Exceptional = Exceptional;

//# sourceMappingURL=exceptional.js.map

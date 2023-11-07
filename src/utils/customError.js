export class ApiError extends Error {
    constructor(msg, code, localizationMsg, params = {}) {
        super(msg);
        this.code = code;
        this.localizationMsg = localizationMsg;
        this.params = params;
    }
}

export class Api404Error extends ApiError {
    constructor(localizationMsg, params = {}, msg = "notFound") {
        super(msg, 404, localizationMsg, params);
    }
}

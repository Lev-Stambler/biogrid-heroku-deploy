(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = __webpack_require__(19);
exports.default = {
    environment: environment_1.environment.production ? 'production' : 'development',
    port: environment_1.environment.port || 3333,
    errorTypes: {
        db: {
            statusCode: 500,
            name: 'Internal Server Error',
            message: 'database error',
        },
        validation: {
            statusCode: 400,
            name: 'Bad Request',
            message: 'validation error',
        },
        auth: { statusCode: 401, name: 'Unauthorized', message: 'auth error' },
        forbidden: {
            statusCode: 403,
            name: 'Forbidden',
            message: 'forbidden content',
        },
        notFound: {
            statusCode: 404,
            name: 'Not Found',
            message: 'content not found',
        },
        entity: {
            statusCode: 422,
            name: 'Unprocessable Entity',
            message: 'entity error',
        },
    },
    get errorMap() {
        return {
            ValidateError: this.errorTypes.validation,
            ValidationError: this.errorTypes.validation,
            CastError: this.errorTypes.db,
        };
    },
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const constants_1 = tslib_1.__importDefault(__webpack_require__(2));
const logger = tslib_1.__importStar(__webpack_require__(21));
const date = new Date();
const fileName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.log`;
logger.configure({
    level: 'debug',
    format: logger.format.combine(logger.format.colorize(), logger.format.simple()),
    transports: [
        new logger.transports.File({ filename: `logs/${fileName}`, level: 'debug' }),
        new logger.transports.Console()
    ]
});
class Logger {
    static log(...args) {
        if (Logger.shouldLog)
            Logger.console.debug(Logger.formatArgs(args));
    }
    static warn(...args) {
        if (Logger.shouldLog)
            Logger.console.warn(Logger.formatArgs(args));
    }
    static error(...args) {
        if (Logger.shouldLog)
            Logger.console.error(Logger.formatArgs(args));
    }
    static info(...args) {
        if (Logger.shouldLog)
            Logger.console.info(Logger.formatArgs(args));
    }
    static verbose(...args) {
        if (Logger.shouldLog)
            Logger.console.verbose(Logger.formatArgs(args));
    }
    static formatArgs(args) {
        return JSON.stringify(args, null, 4);
    }
}
Logger.shouldLog = constants_1.default.environment !== 'test';
Logger.console = logger;
exports.Logger = Logger;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("tsoa");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
"use strict";
const tsoa_1 = __webpack_require__(4);
const services_1 = __webpack_require__(23);
let BiogridController = class BiogridController extends tsoa_1.Controller {
    constructor() {
        super();
    }
    async NewBiogrid(body) {
        await services_1.createNewBiogrid(body);
    }
    async RunBiogridSimulation() {
        await services_1.runBiogridSimulation();
    }
    async GetBiogridSimulationResults() {
        return await services_1.getSimulationResults();
    }
};
tslib_1.__decorate([
    tsoa_1.SuccessResponse(204),
    tsoa_1.Post('/'),
    tslib_1.__param(0, tsoa_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.NewBiogridOpts !== "undefined" && services_1.NewBiogridOpts) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BiogridController.prototype, "NewBiogrid", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(204),
    tsoa_1.Post('/run'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], BiogridController.prototype, "RunBiogridSimulation", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get('/simulation-results'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BiogridController.prototype, "GetBiogridSimulationResults", null);
BiogridController = tslib_1.__decorate([
    tsoa_1.Route('biogrid'),
    tslib_1.__metadata("design:paramtypes", [])
], BiogridController);
exports.BiogridController = BiogridController;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("graphlib");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __webpack_require__(14);
const server = new Server_1.Server();
server.listen();


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const express_1 = tslib_1.__importDefault(__webpack_require__(15));
const swaggerUi = tslib_1.__importStar(__webpack_require__(16));
const bodyParser = tslib_1.__importStar(__webpack_require__(17));
const morgan_1 = tslib_1.__importDefault(__webpack_require__(18));
const constants_1 = tslib_1.__importDefault(__webpack_require__(2));
const ErrorHandler_1 = __webpack_require__(20);
const routes_1 = __webpack_require__(22);
const Logger_1 = __webpack_require__(3);
__webpack_require__(60);
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = constants_1.default.port;
        this.app.use(this.allowCors);
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(morgan_1.default('dev', { skip: () => !Logger_1.Logger.shouldLog }));
        routes_1.RegisterRoutes(this.app);
        this.app.use(ErrorHandler_1.ErrorHandler.handleError);
        this.serveStaticFiles();
        // Disable linter as require statement is necessary for swagger files
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const swaggerDocument = __webpack_require__(61);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
    async listen(port = this.port) {
        process.on('uncaughtException', this.criticalErrorHandler);
        process.on('unhandledRejection', this.criticalErrorHandler);
        const listen = this.app.listen(this.port);
        Logger_1.Logger.info(`${constants_1.default.environment} server running on port: ${this.port}`);
        return listen;
    }
    /**
     * Serve the built, static frontend files for production
     */
    serveStaticFiles() {
        const staticDir = __dirname + '/build/public';
        this.app.use(express_1.default.static(staticDir));
    }
    criticalErrorHandler(...args) {
        Logger_1.Logger.error('Critical Error...', ...args);
        process.exit(1);
    }
    allowCors(req, res, next) {
        // TODO: in a later PR only specific sites will have access. For now, as we get setup, any site can have API access
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, apikey, x-access-token');
        next();
    }
}
exports.Server = Server;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    port: 8080
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(3);
class ApiError extends Error {
    constructor(errorType) {
        super(errorType.message);
        this.statusCode = 500;
        this.name = errorType.name;
        if (errorType.statusCode) {
            this.statusCode = errorType.statusCode;
        }
        this.fields = errorType.fields;
    }
}
exports.ApiError = ApiError;
class ErrorHandler {
    static handleError(error, req, res, next) {
        const { name, message, fields, statusCode } = error;
        Logger_1.Logger.error(`Error: ${statusCode}`, `Error Name: ${name}`, `Error Message: ${message}`, 'Error Fields:', fields || {}, 'Original Error: ', error);
        res.status(statusCode).json({ name, message, fields });
        next();
    }
}
exports.ErrorHandler = ErrorHandler;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const tsoa_1 = __webpack_require__(4);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const BiogridController_1 = __webpack_require__(5);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "NewBiogridOpts": {
        "dataType": "refObject",
        "properties": {
            "startDate": { "dataType": "datetime", "required": true },
            "endDate": { "dataType": "datetime", "required": true },
            "smallBatteryCells": { "dataType": "double", "required": true },
            "largeBatteryCells": { "dataType": "double", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BiogridSimulationResults": {
        "dataType": "refObject",
        "properties": {
            "energyWastedFromSource": { "dataType": "double" },
            "energyWastedInTransportation": { "dataType": "double" },
            "timeWithoutEnoughEnergy": { "dataType": "double" },
            "states": { "dataType": "array", "array": { "dataType": "any" }, "required": true },
        },
        "additionalProperties": true,
    },
};
const validationService = new tsoa_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/api/biogrid', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "NewBiogridOpts" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new BiogridController_1.BiogridController();
        const promise = controller.NewBiogrid.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/biogrid/run', function (request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new BiogridController_1.BiogridController();
        const promise = controller.RunBiogridSimulation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/biogrid/simulation-results', function (request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new BiogridController_1.BiogridController();
        const promise = controller.GetBiogridSimulationResults.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode;
            if (isController(controllerObj)) {
                const headers = controllerObj.getHeaders();
                Object.keys(headers).forEach((name) => {
                    response.set(name, headers[name]);
                });
                statusCode = controllerObj.getStatus();
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
                data.pipe(response);
            }
            else if (data || data === false) { // === false allows boolean result
                response.status(statusCode || 200).json(data);
            }
            else {
                response.status(statusCode || 204).end();
            }
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "specVersion": 2 });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "specVersion": 2 });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "specVersion": 2 });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.', { "specVersion": 2 });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "specVersion": 2 });
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const biogrid_simulator_1 = __webpack_require__(6);
// TODO change to a stateless solution
// See issue: https://github.com/googleinterns/step141-2020/issues/50
let biogrid;
const biobrain = biogrid_simulator_1.BioBrain.Instance;
const states = [];
// TODO, allow users to specify number of buildings, town size, and number of Solar Panels
// See issue: https://github.com/googleinterns/step141-2020/issues/49
async function createNewBiogrid(body) {
    const buildings = [
        new biogrid_simulator_1.Building(10, 2, 3),
        new biogrid_simulator_1.Building(10, 5, 4),
        new biogrid_simulator_1.Building(10, 4, 3),
        new biogrid_simulator_1.Building(10, 1, 2),
        new biogrid_simulator_1.Building(10, 3, 1),
    ];
    const town = new biogrid_simulator_1.RuralArea(buildings, 10, 10);
    biogrid = new biogrid_simulator_1.Biogrid(town, {
        numberOfLargeBatteryCells: body.largeBatteryCells,
        numberOfSmallBatteryCells: body.smallBatteryCells,
        numberOfSolarPanels: 10,
    });
    return 'Created';
}
exports.createNewBiogrid = createNewBiogrid;
async function runBiogridSimulation() {
    const action = biobrain.computeAction(biogrid.getSystemState());
    biogrid.takeAction(action);
    states.push(biogrid.getJsonGraphDetails());
    return 'Fake';
}
exports.runBiogridSimulation = runBiogridSimulation;
async function getSimulationResults() {
    // TODO implement
    return {
        energyWastedFromSource: 10,
        energyWastedInTransportation: 12,
        timeWithoutEnoughEnergy: 24,
        states,
    };
}
exports.getSimulationResults = getSimulationResults;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grid_simulator_1 = __webpack_require__(8);
const config_1 = __webpack_require__(1);
class BioBattery {
    /**
     * Take in a relativePosition which is generated by the grid class so that batteries
     * are evenly spaced out.
     * The relativePositions have been verified in the Biogrid class
     * @param x Distance from the left edge of the town
     * @param y Distance from the top edge of the town
     */
    constructor(x, y, typeOfBattery, currentBatteryEnergy = config_1.SMALL_BATTERY.DEFAULT_START_ENERGY, maxCapacity = config_1.SMALL_BATTERY.MAX_CAPACITY) {
        this.relativePosition = { x, y };
        if (!this.validateInputs(currentBatteryEnergy, maxCapacity)) {
            // TODO return a tuple of from validate to with the boolean and unpassed validations
            throw new Error(`Cannot create a battery with values: (${currentBatteryEnergy}, ${maxCapacity})`);
        }
        this.currentBatteryEnergy = currentBatteryEnergy;
        this.maxCapacity = maxCapacity;
        this.name = typeOfBattery;
    }
    getRelativePosition() {
        return this.relativePosition;
    }
    startCharging(inputPower) {
        if (this.currentBatteryEnergy + inputPower > this.maxCapacity) {
            this.currentBatteryEnergy = this.maxCapacity;
        }
        this.currentBatteryEnergy += inputPower;
    }
    // TODO implement when you use a formula for charging a battery
    stopCharging() { }
    supplyPower(outputenergy) {
        if (this.currentBatteryEnergy - outputenergy < 0) {
            //TODO implement the function to notify the request with amount of output left
            const temp = this.currentBatteryEnergy;
            this.currentBatteryEnergy = 0;
            return temp;
        }
        this.currentBatteryEnergy -= outputenergy;
        return outputenergy;
    }
    validateInputs(currentBatteryPower, maxCapacity = this.maxCapacity) {
        const batteryValidator = {
            value: currentBatteryPower,
            max: maxCapacity,
            isPositive: currentBatteryPower >= 0 && maxCapacity >= 0,
        };
        return grid_simulator_1.validate(batteryValidator);
    }
    getEnergyInJoules() {
        return this.currentBatteryEnergy;
    }
    get MaxCapacity() {
        return this.maxCapacity;
    }
    isEmpty() {
        return this.currentBatteryEnergy === 0;
    }
    isFull() {
        return this.currentBatteryEnergy === this.maxCapacity;
    }
}
exports.BioBattery = BioBattery;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.min != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid && validatableInput.isPositive;
}
exports.validate = validate;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SMALL_BATTERY = {
    DEFAULT_START_ENERGY: 13500,
    MAX_CAPACITY: 13500,
};
exports.LARGE_BATTERY = {
    DEFAULT_START_ENERGY: 540000,
    MAX_CAPACITY: 540000,
};
// Each day a solar panel is roughly charged with electricity
// for 4hours at a rate of 250 watts ~ 1000watts ~~ 3.6Mj
// To prolong their life time, solar panels will be expected 
// to keep a minimum of about 10000j
exports.SOLAR_PANEL = {
    DEFAULT_INITIAL_ENERGY: 3600000,
    MIN_CAPACITY: 10000,
};
var GRID_ITEM_NAMES;
(function (GRID_ITEM_NAMES) {
    GRID_ITEM_NAMES["SOLAR_PANEL"] = "solar_panel";
    GRID_ITEM_NAMES["SMALL_BATTERY"] = "small_battery";
    GRID_ITEM_NAMES["LARGE_BATTERY"] = "large_battery";
    GRID_ITEM_NAMES["ENERGY_USER"] = "energy_user";
    GRID_ITEM_NAMES["GRID"] = "grid";
})(GRID_ITEM_NAMES = exports.GRID_ITEM_NAMES || (exports.GRID_ITEM_NAMES = {}));
;
exports.BUILDING = {
    DEFAULT_INITIAL_ENERGY: 4545,
    MIN_CAPACITY: 0,
    MAX_CAPACITY: 4545,
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const biogrid_simulator_1 = __webpack_require__(6);
const config_1 = __webpack_require__(1);
const graphlib_1 = __webpack_require__(9);
// We can only have one BioBrain per grid
class BioBrain {
    constructor() {
        this.clonedGraph = new graphlib_1.Graph();
    }
    static get Instance() {
        if (!this.instance) {
            this.instance = new BioBrain();
        }
        return this.instance;
    }
    computeAction(state) {
        let shortestDistances = state.getShortestDistances();
        this.clonedGraph = state.cloneStateGraph();
        // Create an object of buildings with the energyProviders which supplied
        // TODO assign the building as Building not the names
        let buildingSuppliers = this.buildingCharging(this.getGridItems()[config_1.GRID_ITEM_NAMES.ENERGY_USER], this.getGridItems()[config_1.GRID_ITEM_NAMES.SMALL_BATTERY], this.getGridItems()[config_1.GRID_ITEM_NAMES.LARGE_BATTERY], this.getGridItems()[config_1.GRID_ITEM_NAMES.SOLAR_PANEL], shortestDistances);
        let smallBatterySupplier = this.chargeSmallBatteries(this.getGridItems()[config_1.GRID_ITEM_NAMES.SMALL_BATTERY], this.getGridItems()[config_1.GRID_ITEM_NAMES.LARGE_BATTERY], this.getGridItems()[config_1.GRID_ITEM_NAMES.SOLAR_PANEL], shortestDistances);
        let largeBatterySupplier = this.chargeLargebatteries(this.getGridItems()[config_1.GRID_ITEM_NAMES.LARGE_BATTERY], this.getGridItems()[config_1.GRID_ITEM_NAMES.SOLAR_PANEL], shortestDistances);
        return new biogrid_simulator_1.BiogridAction({
            ...buildingSuppliers,
            ...smallBatterySupplier,
            ...largeBatterySupplier
        });
    }
    getGridItems() {
        // TODO add the type of states
        let buildings = [];
        let smallBatteries = [];
        let largeBatteries = [];
        let solarPanels = [];
        const allGridItems = this.clonedGraph.nodes();
        allGridItems.map(item => {
            const gridItem = this.clonedGraph.node(item);
            if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER)) {
                buildings.push(gridItem);
            }
            else if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.SMALL_BATTERY)) {
                smallBatteries.push(gridItem);
            }
            else if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.LARGE_BATTERY)) {
                largeBatteries.push(gridItem);
            }
            else if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.SOLAR_PANEL)) {
                solarPanels.push(gridItem);
            }
        });
        return {
            [config_1.GRID_ITEM_NAMES.ENERGY_USER]: buildings,
            [config_1.GRID_ITEM_NAMES.SMALL_BATTERY]: smallBatteries,
            [config_1.GRID_ITEM_NAMES.LARGE_BATTERY]: largeBatteries,
            [config_1.GRID_ITEM_NAMES.SOLAR_PANEL]: solarPanels
        };
    }
    chargeLargebatteries(largeBatteries, solarPanels, shortestDistances) {
        // Assuming the large battery is not fully charged
        largeBatteries = largeBatteries.filter((battery) => !battery.isFull());
        // Filter the solar panels and remove the ones with the minimum energy or empty
        solarPanels = solarPanels.filter((solarPanel) => !solarPanel.isEmpty());
        // Create an array of the possible energy givers
        const allEnergyProviders = [...solarPanels];
        return this.determineSupplyingPath(largeBatteries, allEnergyProviders, shortestDistances);
    }
    chargeSmallBatteries(smallBatteries, largeBatteries, solarPanels, shortestDistances) {
        // Assuming the small batteries are not fully charged
        smallBatteries = smallBatteries.filter((battery) => !battery.isFull());
        // Filter the large batteries and remove the ones which do not have power in them
        largeBatteries = largeBatteries.filter((battery) => !battery.isEmpty());
        // Filter the solar panels and remove the ones with the minimum energy or empty
        solarPanels = solarPanels.filter((solarPanel) => !solarPanel.isEmpty());
        // Create an array of the possible energy givers
        const allEnergyProviders = [
            ...solarPanels,
            ...largeBatteries,
        ];
        return this.determineSupplyingPath(smallBatteries, allEnergyProviders, shortestDistances);
    }
    buildingCharging(buildings, smallBatteries, largeBatteries, solarPanels, shortestDistances) {
        // Assuming that the houses asking for power will not have power in them.
        // Do not consider building with full power capacity
        buildings = buildings.filter((building) => {
            return building.getEnergyInJoules() === building.MinCapacity;
        });
        // Filter the batteries and removes the ones which do not have power in them
        // Do not include batteries which are empty
        smallBatteries = smallBatteries.filter((battery) => !battery.isEmpty());
        largeBatteries = largeBatteries.filter((battery) => !battery.isEmpty());
        // Filter the solar panels and remove the ones with the minimum energy or empty
        solarPanels = solarPanels.filter((solarPanel) => !solarPanel.isEmpty());
        // Create an array of the possible energy givers
        const allEnergyProviders = [
            ...smallBatteries,
            ...solarPanels,
            ...largeBatteries,
        ];
        return this.determineSupplyingPath(buildings, allEnergyProviders, shortestDistances);
    }
    determineSupplyingPath(supplyToAgents, supplyFromAgents, shortestDistances) {
        // Create an object of buildings with the energyProviders which supplied
        // TODO: advancement: assign the supplyToAgent itself not the names
        let supplyToSupplyFromAgents = {};
        for (const supplyToAgent of supplyToAgents) {
            const energyReq = supplyToAgent.MaxCapacity - supplyToAgent.getEnergyInJoules();
            let shortestDistance = Number.POSITIVE_INFINITY;
            // Keep track of the batteryPosition
            let indexOfProvider = -1;
            for (let index = 0; index < supplyFromAgents.length; index++) {
                const newShortestDistance = shortestDistances[supplyFromAgents[index].name][supplyToAgent.name]
                    .distance;
                const energyProvided = supplyFromAgents[index].getEnergyInJoules();
                if (newShortestDistance < shortestDistance &&
                    energyProvided >= energyReq) {
                    shortestDistance = newShortestDistance;
                    indexOfProvider = index;
                }
            }
            if (indexOfProvider === -1) {
                continue;
            }
            const provideFrom = supplyFromAgents[indexOfProvider];
            const provideTo = supplyToAgent;
            if (provideTo instanceof biogrid_simulator_1.BioBattery) {
                provideTo.startCharging(energyReq);
            }
            else {
                provideTo.increaseEnergy(energyReq);
            }
            provideFrom.supplyPower(energyReq);
            this.clonedGraph.setNode(provideFrom.name, provideFrom);
            this.clonedGraph.setNode(provideTo.name, provideTo);
            supplyFromAgents[indexOfProvider].supplyPower(energyReq);
            supplyToSupplyFromAgents[supplyToAgent.name] =
                supplyFromAgents[indexOfProvider].name;
        }
        return supplyToSupplyFromAgents;
    }
}
exports.BioBrain = BioBrain;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grid_simulator_1 = __webpack_require__(8);
const config_1 = __webpack_require__(1);
class BioEnergySource {
    constructor(x, y, name = config_1.GRID_ITEM_NAMES.SOLAR_PANEL, sourceCapacity = config_1.SOLAR_PANEL.DEFAULT_INITIAL_ENERGY, minCapacity = config_1.SOLAR_PANEL.MIN_CAPACITY) {
        this.name = name;
        this.relativePosition = { x, y };
        if (!this.validateInputs(sourceCapacity, minCapacity)) {
            // TODO return a tuple of from validate to with the boolean and unpassed validations
            throw new Error(`Cannot create an Energy source object with values: (${sourceCapacity}, ${minCapacity})`);
        }
        this.sourceCapacity = sourceCapacity;
        this.minCapacity = minCapacity;
    }
    getRelativePosition() {
        return this.relativePosition;
    }
    getMinCapacity() {
        return this.minCapacity;
    }
    validateInputs(sourceCapacity, minCapacity = this.minCapacity) {
        this.energySourceValidator = {
            value: sourceCapacity,
            min: minCapacity,
            isPositive: sourceCapacity >= 0 && minCapacity >= 0,
        };
        return grid_simulator_1.validate(this.energySourceValidator);
    }
    supplyPower(requiredEnergy) {
        this.sourceCapacity = this.sourceCapacity - requiredEnergy;
        return requiredEnergy;
    }
    getEnergyInJoules() {
        return this.sourceCapacity;
    }
    get MinCapacity() {
        return this.minCapacity;
    }
    isEmpty() {
        return this.sourceCapacity === this.minCapacity;
    }
    set SourceCapacity(inputEnergy) {
        if (!this.validateInputs(inputEnergy)) {
            // TODO return a tuple of from validate to with the boolean and unpassed validations
            throw new Error(`Cannot set inputEnergy to ${inputEnergy}`);
        }
        this.sourceCapacity = inputEnergy;
    }
}
exports.BioEnergySource = BioEnergySource;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const biogrid_state_1 = __webpack_require__(11);
const biobattery_1 = __webpack_require__(7);
const bioenergy_source_1 = __webpack_require__(10);
const config_1 = __webpack_require__(1);
class Biogrid {
    constructor(town, opts) {
        // Batteries
        // TODO implement this outside when calling the grid
        const smallBatteryPositions = this.createGridItemPositions(town.getTownSize(), opts.numberOfSmallBatteryCells);
        const largeBatteryPositions = this.createGridItemPositions(town.getTownSize(), opts.numberOfLargeBatteryCells);
        // TODO constants
        this.smallBatteries = this.createBatteries(smallBatteryPositions, config_1.SMALL_BATTERY.DEFAULT_START_ENERGY, config_1.SMALL_BATTERY.MAX_CAPACITY, config_1.GRID_ITEM_NAMES.SMALL_BATTERY);
        this.largeBatteries = this.createBatteries(largeBatteryPositions, config_1.LARGE_BATTERY.DEFAULT_START_ENERGY, config_1.LARGE_BATTERY.MAX_CAPACITY, config_1.GRID_ITEM_NAMES.LARGE_BATTERY);
        // Towns
        this.town = town;
        // Enery Source
        // TODO implement the solar panels
        const solarPanelPositions = this.createGridItemPositions(town.getTownSize(), opts.numberOfSolarPanels);
        this.solarPanels = this.createSolarPanels(solarPanelPositions);
        this.state = new biogrid_state_1.BiogridState(this.createGridItems());
    }
    createGridItems() {
        return [
            ...this.smallBatteries,
            ...this.largeBatteries,
            ...this.town.getEnergyUsers(),
            ...this.solarPanels,
        ];
    }
    getSystemState() {
        return this.state;
    }
    getJsonGraphDetails() {
        return this.state.getJsonGraph();
    }
    createBatteries(positions, initEnergy, maxCapacity, name) {
        return positions.map((position, index) => new biobattery_1.BioBattery(position.x, position.y, `${name}-${index}`, initEnergy, maxCapacity));
    }
    createSolarPanels(positions) {
        return positions.map((position, index) => new bioenergy_source_1.BioEnergySource(position.x, position.y, `${config_1.GRID_ITEM_NAMES.SOLAR_PANEL}-${index}`, config_1.SOLAR_PANEL.DEFAULT_INITIAL_ENERGY, config_1.SOLAR_PANEL.MIN_CAPACITY));
    }
    takeAction(action) {
        // RETURN a new BiogridState
        const allSupplyingPaths = action.getSupplyingPaths();
        const clonedGraph = this.state.cloneStateGraph();
        for (const supplyPath in allSupplyingPaths) {
            const oldGridItem = this.state.getGridItem(supplyPath);
            const supplyingGridItem = this.state.getGridItem(allSupplyingPaths[supplyPath]);
            const typeOldGridItem = this.getGridItemType(oldGridItem);
            if (typeOldGridItem === config_1.GRID_ITEM_NAMES.ENERGY_USER) {
                const energyUser = oldGridItem;
                const energyUserReq = energyUser.MaxCapacity - energyUser.getEnergyInJoules();
                const typeSupplyingGridItem = this.getGridItemType(supplyingGridItem);
                if (typeSupplyingGridItem === config_1.GRID_ITEM_NAMES.LARGE_BATTERY || typeSupplyingGridItem === config_1.GRID_ITEM_NAMES.SMALL_BATTERY) {
                    const battery = supplyingGridItem;
                    battery.supplyPower(energyUserReq);
                    clonedGraph.setNode(battery.name, battery);
                }
                else if (typeSupplyingGridItem === config_1.GRID_ITEM_NAMES.SOLAR_PANEL) {
                    const solarpanel = supplyingGridItem;
                    solarpanel.supplyPower(energyUserReq);
                    clonedGraph.setNode(solarpanel.name, solarpanel);
                }
                else {
                    continue;
                }
                energyUser.increaseEnergy(energyUserReq);
                clonedGraph.setNode(energyUser.name, energyUser);
            }
            else if (typeOldGridItem === config_1.GRID_ITEM_NAMES.SMALL_BATTERY) {
                const energyUser = oldGridItem;
                const energyUserReq = energyUser.MaxCapacity - energyUser.getEnergyInJoules();
                const typeSupplyingGridItem = this.getGridItemType(supplyingGridItem);
                if (typeSupplyingGridItem === config_1.GRID_ITEM_NAMES.LARGE_BATTERY) {
                    const battery = supplyingGridItem;
                    battery.supplyPower(energyUserReq);
                    clonedGraph.setNode(battery.name, battery);
                }
                else if (typeSupplyingGridItem === config_1.GRID_ITEM_NAMES.SOLAR_PANEL) {
                    const solarpanel = supplyingGridItem;
                    solarpanel.supplyPower(energyUserReq);
                    clonedGraph.setNode(solarpanel.name, solarpanel);
                }
                else {
                    continue;
                }
                energyUser.startCharging(energyUserReq);
                clonedGraph.setNode(energyUser.name, energyUser);
            }
            else if (typeOldGridItem === config_1.GRID_ITEM_NAMES.LARGE_BATTERY) {
                const energyUser = oldGridItem;
                const energyUserReq = energyUser.MaxCapacity - energyUser.getEnergyInJoules();
                const typeSupplyingGridItem = this.getGridItemType(supplyingGridItem);
                if (typeSupplyingGridItem === config_1.GRID_ITEM_NAMES.SOLAR_PANEL) {
                    const solarpanel = supplyingGridItem;
                    solarpanel.supplyPower(energyUserReq);
                }
                else {
                    continue;
                }
                energyUser.startCharging(energyUserReq);
                clonedGraph.setNode(energyUser.name, energyUser);
            }
        }
        this.state.setnewStateGraph(clonedGraph);
        return this.state;
    }
    getGridItemType(gridItem) {
        if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER)) {
            return config_1.GRID_ITEM_NAMES.ENERGY_USER;
        }
        else if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.SMALL_BATTERY)) {
            return config_1.GRID_ITEM_NAMES.SMALL_BATTERY;
        }
        else if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.LARGE_BATTERY)) {
            return config_1.GRID_ITEM_NAMES.LARGE_BATTERY;
        }
        else if (gridItem.name.includes(config_1.GRID_ITEM_NAMES.SOLAR_PANEL)) {
            return config_1.GRID_ITEM_NAMES.SOLAR_PANEL;
        }
        return config_1.GRID_ITEM_NAMES.GRID;
    }
    /**
     * A simplified algorithm to (mostly) evenly space out batteries throughout the square town
     * Split the town into rows and columns and then place a battery in the center of each cell
     * TODO: have a smart algorithm for placement, see https://github.com/googleinterns/step141-2020/issues/42
     */
    createGridItemPositions(townSize, numberOfGridItems) {
        const cols = Math.ceil(numberOfGridItems / townSize.width);
        const rows = Math.ceil(numberOfGridItems / cols);
        const positions = [];
        for (let i = 0; i < numberOfGridItems; i++) {
            positions.push({
                x: (((i % cols) + 0.5) / cols) * townSize.width,
                y: ((Math.floor(i / cols) + 0.5) / rows) * townSize.height,
            });
        }
        return positions;
    }
}
exports.Biogrid = Biogrid;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const graphlib = tslib_1.__importStar(__webpack_require__(9));
const config_1 = __webpack_require__(1);
class BiogridState {
    // TODO think about implement it StateGraphVertex[] as an object of key: name -> value: StateGraphVertex
    constructor(vertices) {
        // Directed so as to have two edges between A and B, but in opposite directions
        this.graph = new graphlib.Graph({ directed: true });
        // Initialize the graph with a grid which is a gridItem and has position (0, 0) to keep track of where the items are placed on the map
        const grid = {
            name: config_1.GRID_ITEM_NAMES.GRID,
            getRelativePosition() {
                return { x: 0, y: 0 };
            },
        };
        this.graph.setNode(grid.name, grid);
        // Add all the vertices as nodes/vertices of the graph, with a name for
        // the particular grid item and label which is data for the particular vertex as the GridItem itself
        vertices.map((vertex) => this.graph.setNode(vertex.name, vertex));
        // Add all the edges that can be formed into the graph, read the add method for how it is done
        vertices.map((vertex) => this.addEdge(vertex));
    }
    /**
     * Method to return the graph for the states of the grid
     */
    getGraph() {
        return this.graph;
    }
    /**
     * cloneStateGraph is used to clone the graph for use in the brain.
     */
    cloneStateGraph() {
        return graphlib.json.read(graphlib.json.write(this.graph));
    }
    /**
     * getJsonGraph returns the json details of the graph
     */
    getJsonGraph() {
        return graphlib.json.write(this.graph);
    }
    /**
     * setnewStateGraph
     */
    setnewStateGraph(newGraph) {
        this.graph = newGraph;
    }
    /**
     * Method finds all the vertices in the graph and returns tehir names
     * @returns the names of the vertices / gridItems in the grid
     */
    getAllVertices() {
        return this.graph.nodes();
    }
    /**
     * Method searches the graph for a specific node by its name
     * @param name is the string that represents the GridItem you are searching for
     */
    getGridItem(name) {
        return this.graph.node(name);
    }
    /**
     * getAllGridItems searches the graph vertices and retrives the gridItems which are stored on the vertices
     */
    getAllGridItems() {
        return this.getAllVertices().map((vertexName) => this.getGridItem(vertexName));
    }
    /**
     * Method returns the shortest distance from every edge to the all the other edges
     * @returns the shortest distance from any edge to the other edges
     */
    getShortestDistances() {
        return graphlib.alg.dijkstraAll(this.graph, this.getWeightbyGraph(this.graph));
    }
    getWeightbyGraph(graph) {
        return function (edge) {
            return graph.edge(edge);
        };
    }
    /**
     * When given a specific edge, return the weight or distance between the two vertices
     * @param edge is the Edge of the graph which you would like to get
     * @returns the weight or the distance between the vertices of @param edge
     */
    getWeightEdge(edge) {
        return this.graph.edge(edge);
    }
    /**
     * Get all GridItem positions in the graph
     */
    getAllPositions() {
        return this.graph.nodes().map((vertex) => this.getGridItem(vertex).getRelativePosition());
    }
    /**
     * Add Edge when there is supposed to be an edge
     * Add edges from the grid, to the every other part of the grid except solar panels
     * Add reverse edges from the batteries to the grid
     * Add edge from solar panels to the grid, not the reverse
     *                                     FROM GRID----->building<----------------------------------->building<---FROM GRID
     *                                                     ^--|                                   |------^
     *                                                        |----------S.SMALL_BATTERY----------|
     *                                                                               ^-----|
     *                  L.LARGE_BATTERY<------------------------------------>GRID<---------|
     *                                                FROM SOLAR PANEL^-------| |---^FROM SOLAR PANEL
     *                                                  SOLAR_PANEL---------->| |<--------------SOLAR_PANEL
     * @param newVertex is the new item of the Grid to add to @param this.graph as displayed above
     */
    addEdge(newVertex) {
        const newVertexName = newVertex.name;
        for (const vertex of this.graph.nodes()) {
            const distance = this.calculateDistance(newVertex, this.graph.node(vertex));
            let edge;
            // Solar panels to the grid only
            // searching for includes GRID so that when scaling it is easy to add multiple grids
            if (newVertexName.includes(config_1.GRID_ITEM_NAMES.SOLAR_PANEL) &&
                vertex.includes(config_1.GRID_ITEM_NAMES.GRID) &&
                vertex !== newVertexName) {
                edge = { v: newVertexName, w: vertex, weight: distance };
            }
            else if (newVertexName.includes(config_1.GRID_ITEM_NAMES.LARGE_BATTERY) &&
                vertex.includes(config_1.GRID_ITEM_NAMES.GRID) &&
                vertex !== newVertexName) {
                edge = { v: newVertexName, w: vertex, weight: distance };
                // Add the opposite edge from grid to battery
                this.graph.setEdge(vertex, newVertexName, distance);
            }
            else if (newVertexName.includes(config_1.GRID_ITEM_NAMES.SMALL_BATTERY) &&
                vertex !== newVertexName) {
                if (vertex.includes(config_1.GRID_ITEM_NAMES.GRID)) {
                    edge = { v: newVertexName, w: vertex, weight: distance };
                    // Add the opposite edge from grid to battery
                    this.graph.setEdge(vertex, newVertexName, distance);
                }
                else if (vertex.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER)) {
                    edge = { v: newVertexName, w: vertex, weight: distance };
                }
                else {
                    continue;
                }
            }
            else if (newVertexName.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER) &&
                vertex !== newVertexName) {
                if (vertex.includes(config_1.GRID_ITEM_NAMES.GRID) ||
                    vertex.includes(config_1.GRID_ITEM_NAMES.SMALL_BATTERY)) {
                    edge = { v: vertex, w: newVertexName, weight: distance };
                }
                else if (vertex.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER)) {
                    edge = { v: newVertexName, w: vertex, weight: distance };
                    // Add the reverse edge from the new energy user/ building to the other building
                    this.graph.setEdge(vertex, newVertexName, distance);
                }
                else {
                    continue;
                }
            }
            else {
                // Do not connect the parts of the grid which don't have to be connected
                continue;
            }
            this.graph.setEdge(edge.v, edge.w, edge.weight);
        }
    }
    /**
     * Calculate distance via Pythagorean's theorem
     */
    calculateDistance(v1, v2) {
        return Math.sqrt(Math.pow(v1.getRelativePosition().x - v2.getRelativePosition().x, 2) +
            Math.pow(v1.getRelativePosition().y - v2.getRelativePosition().y, 2));
    }
}
exports.BiogridState = BiogridState;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BiogridAction {
    constructor(supplyPath) {
        this.supplyPath = supplyPath;
    }
    getSupplyingPaths() {
        return this.supplyPath;
    }
}
exports.BiogridAction = BiogridAction;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(1);
// TODO rename energy to power consumption
/**
 * A structure such as a building or house which uses energy to operate.
 */
class Building {
    /**
     * @param {number} energy Amount of energy the building will have in joules.
     */
    constructor(energy, x, y, name = config_1.GRID_ITEM_NAMES.ENERGY_USER, minCapacity = config_1.BUILDING.MIN_CAPACITY, maxCapacity = config_1.BUILDING.MAX_CAPACITY) {
        this.minCapacity = minCapacity;
        this.maxCapacity = maxCapacity;
        // Initial id value, will be changed by rural area.
        this.buildingId = -1;
        this.relativePosition = { x, y };
        this.name = name;
        if (this.isPositive(energy)) {
            this.energyInJoules = energy;
        }
        else {
            throw new Error("Can't create a building with negative energy!");
        }
    }
    get MinCapacity() {
        return this.minCapacity;
    }
    get MaxCapacity() {
        return this.maxCapacity;
    }
    getRelativePosition() {
        return this.relativePosition;
    }
    isPositive(energy) {
        return energy >= 0;
    }
    getBuildingId() {
        return this.buildingId;
    }
    setBuildingId(Id) {
        this.buildingId = Id;
    }
    getEnergyInJoules() {
        return this.energyInJoules;
    }
    /**
     * This method adds energy to the current building's power.
     */
    increaseEnergy(energy) {
        if (this.isPositive(energy)) {
            this.energyInJoules += energy;
        }
        else {
            throw new Error("Can't add negative energy!");
        }
    }
    /**
     * This method uses energy from the current building's power.
     */
    decreaseEnergy(energy) {
        if (!this.isPositive(energy)) {
            throw new Error("Can't use a negative amount of energy!");
        }
        // Building can't have a negative amount of energy in store.
        if (energy >= this.energyInJoules) {
            this.energyInJoules = 0;
        }
        else {
            this.energyInJoules -= energy;
        }
    }
}
exports.Building = Building;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A rural area that represents a community where a microgrid can function.
 */
class RuralArea {
    /**
     * @param {Building[]} buildings A list of buildings which make up a town.
     */
    constructor(buildings, townWidth, townHeight) {
        this.buildings = [];
        this.townSize = { width: townWidth, height: townHeight };
        for (let i = 0; i < buildings.length; i++) {
            this.addEnergyUser(buildings[i]);
        }
    }
    getEnergyUsers() {
        return this.buildings;
    }
    getTownSize() {
        return this.townSize;
    }
    /**
     * This method gets a building in a town by its id number.
     * @param {number} Id The building Id we're looking for.
     * @return {Building} Returns the building if found in the list, null if not.
     */
    getBuildingById(Id) {
        for (let i = 0; i < this.buildings.length; i++) {
            if (this.buildings[i].getBuildingId() === Id) {
                return this.buildings[i];
            }
        }
        return null;
    }
    /**
     * This method adds a building to our town and assigns it a random Id.
     * @param {Building} newBuilding The building to be added.
     */
    addEnergyUser(newBuilding) {
        const pos = newBuilding.getRelativePosition();
        if (pos.x > this.townSize.width || pos.y > this.townSize.height) {
            throw new Error("Building relativePosition must be within the town's size constraints");
        }
        const randomIds = this.buildings.map((building) => building.getBuildingId());
        let randomId = Math.floor(Math.random() * 1000);
        while (randomIds.includes(randomId)) {
            randomId = Math.floor(Math.random() * 1000);
        }
        newBuilding.setBuildingId(randomId);
        this.buildings.push(newBuilding);
        return newBuilding;
    }
}
exports.RuralArea = RuralArea;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(5), exports);


/***/ }),
/* 61 */
/***/ (function(module) {

module.exports = JSON.parse("{\"basePath\":\"/service\",\"consumes\":[\"application/json\"],\"definitions\":{\"NewBiogridOpts\":{\"properties\":{\"startDate\":{\"type\":\"string\",\"format\":\"date-time\"},\"endDate\":{\"type\":\"string\",\"format\":\"date-time\"},\"smallBatteryCells\":{\"type\":\"number\",\"format\":\"double\"},\"largeBatteryCells\":{\"type\":\"number\",\"format\":\"double\"}},\"required\":[\"startDate\",\"endDate\",\"smallBatteryCells\",\"largeBatteryCells\"],\"type\":\"object\",\"additionalProperties\":true},\"BiogridSimulationResults\":{\"properties\":{\"energyWastedFromSource\":{\"type\":\"number\",\"format\":\"double\",\"x-nullable\":true},\"energyWastedInTransportation\":{\"type\":\"number\",\"format\":\"double\",\"x-nullable\":true},\"timeWithoutEnoughEnergy\":{\"type\":\"number\",\"format\":\"double\",\"x-nullable\":true},\"states\":{\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"states\"],\"type\":\"object\",\"additionalProperties\":true}},\"info\":{\"title\":\"TSOA\",\"version\":\"1.0.0\",\"description\":\"Build swagger-compliant REST APIs using TypeScript and Node\",\"license\":{\"name\":\"MIT\"}},\"paths\":{\"/biogrid\":{\"post\":{\"operationId\":\"NewBiogrid\",\"produces\":[\"application/json\"],\"responses\":{\"204\":{\"description\":\"\"}},\"security\":[],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/NewBiogridOpts\"}}]}},\"/biogrid/run\":{\"post\":{\"operationId\":\"RunBiogridSimulation\",\"produces\":[\"application/json\"],\"responses\":{\"204\":{\"description\":\"\"}},\"security\":[],\"parameters\":[]}},\"/biogrid/simulation-results\":{\"get\":{\"operationId\":\"GetBiogridSimulationResults\",\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"\",\"schema\":{\"$ref\":\"#/definitions/BiogridSimulationResults\"}}},\"security\":[],\"parameters\":[]}}},\"produces\":[\"application/json\"],\"swagger\":\"2.0\",\"securityDefinitions\":{}}");

/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map
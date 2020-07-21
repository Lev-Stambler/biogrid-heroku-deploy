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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
const environment_1 = __webpack_require__(12);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const constants_1 = tslib_1.__importDefault(__webpack_require__(1));
const logger = tslib_1.__importStar(__webpack_require__(14));
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tsoa");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
"use strict";
const tsoa_1 = __webpack_require__(3);
const services_1 = __webpack_require__(16);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __webpack_require__(7);
const server = new Server_1.Server();
server.listen();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const express_1 = tslib_1.__importDefault(__webpack_require__(8));
const swaggerUi = tslib_1.__importStar(__webpack_require__(9));
const bodyParser = tslib_1.__importStar(__webpack_require__(10));
const morgan_1 = tslib_1.__importDefault(__webpack_require__(11));
const constants_1 = tslib_1.__importDefault(__webpack_require__(1));
const ErrorHandler_1 = __webpack_require__(13);
const routes_1 = __webpack_require__(15);
const Logger_1 = __webpack_require__(2);
__webpack_require__(18);
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
        const swaggerDocument = __webpack_require__(19);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
    async listen(port = this.port) {
        if (!port) {
            port = parseInt(process.env.PORT || '3000');
        }
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    // Leave port null so that the Heroku env variable can override it
    port: null
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(2);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const tsoa_1 = __webpack_require__(3);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const BiogridController_1 = __webpack_require__(4);
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
            "energyWastedFromSource": { "dataType": "double", "required": true },
            "energyWastedInTransportation": { "dataType": "double", "required": true },
            "timeWithoutEnoughEnergy": { "dataType": "double", "required": true },
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
async function createNewBiogrid(body) {
    // TODO implement
    return "Fake";
}
exports.createNewBiogrid = createNewBiogrid;
async function runBiogridSimulation() {
    // TODO implement
    return "Fake";
}
exports.runBiogridSimulation = runBiogridSimulation;
async function getSimulationResults() {
    // TODO implement
    return {
        energyWastedFromSource: 10,
        energyWastedInTransportation: 12,
        timeWithoutEnoughEnergy: 24
    };
}
exports.getSimulationResults = getSimulationResults;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(4), exports);


/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("{\"basePath\":\"/service\",\"consumes\":[\"application/json\"],\"definitions\":{\"NewBiogridOpts\":{\"properties\":{\"startDate\":{\"type\":\"string\",\"format\":\"date-time\"},\"endDate\":{\"type\":\"string\",\"format\":\"date-time\"},\"smallBatteryCells\":{\"type\":\"number\",\"format\":\"double\"},\"largeBatteryCells\":{\"type\":\"number\",\"format\":\"double\"}},\"required\":[\"startDate\",\"endDate\",\"smallBatteryCells\",\"largeBatteryCells\"],\"type\":\"object\",\"additionalProperties\":true},\"BiogridSimulationResults\":{\"properties\":{\"energyWastedFromSource\":{\"type\":\"number\",\"format\":\"double\"},\"energyWastedInTransportation\":{\"type\":\"number\",\"format\":\"double\"},\"timeWithoutEnoughEnergy\":{\"type\":\"number\",\"format\":\"double\"}},\"required\":[\"energyWastedFromSource\",\"energyWastedInTransportation\",\"timeWithoutEnoughEnergy\"],\"type\":\"object\",\"additionalProperties\":true}},\"info\":{\"title\":\"TSOA\",\"version\":\"1.0.0\",\"description\":\"Build swagger-compliant REST APIs using TypeScript and Node\",\"license\":{\"name\":\"MIT\"}},\"paths\":{\"/biogrid\":{\"post\":{\"operationId\":\"NewBiogrid\",\"produces\":[\"application/json\"],\"responses\":{\"204\":{\"description\":\"\"}},\"security\":[],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/NewBiogridOpts\"}}]}},\"/biogrid/run\":{\"post\":{\"operationId\":\"RunBiogridSimulation\",\"produces\":[\"application/json\"],\"responses\":{\"204\":{\"description\":\"\"}},\"security\":[],\"parameters\":[]}},\"/biogrid/simulation-results\":{\"get\":{\"operationId\":\"GetBiogridSimulationResults\",\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"\",\"schema\":{\"$ref\":\"#/definitions/BiogridSimulationResults\"}}},\"security\":[],\"parameters\":[]}}},\"produces\":[\"application/json\"],\"swagger\":\"2.0\",\"securityDefinitions\":{}}");

/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map
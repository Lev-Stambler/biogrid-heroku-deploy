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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = __webpack_require__(17);
exports.default = {
    environment: environment_1.environment.production ? 'production' : 'development',
    port: environment_1.environment.port || parseInt(process.env.PORT || '3000'),
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
    simulation: {
        NUMBER_OF_SIM_CYCLES: 10,
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
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(58), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(1), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const constants_1 = tslib_1.__importDefault(__webpack_require__(2));
const logger = tslib_1.__importStar(__webpack_require__(19));
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("tsoa");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
"use strict";
const tsoa_1 = __webpack_require__(6);
const services_1 = __webpack_require__(21);
let BiogridController = class BiogridController extends tsoa_1.Controller {
    constructor() {
        super();
    }
    async SimulateNewBiogrid(body) {
        return await services_1.simulateNewBiogrid(body);
    }
};
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post('/simulate'),
    tslib_1.__param(0, tsoa_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.NewBiogridOpts !== "undefined" && services_1.NewBiogridOpts) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BiogridController.prototype, "SimulateNewBiogrid", null);
BiogridController = tslib_1.__decorate([
    tsoa_1.Route('biogrid'),
    tslib_1.__metadata("design:paramtypes", [])
], BiogridController);
exports.BiogridController = BiogridController;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * These values are for a small battery which store a maximum 48-volts 6.5kWh
 * and supply upto 3 houses per hour depending on the charge
 * These small batteries are standalone batteries which support the system that relies on solar
 * @see https://www.altenergymag.com/article/2018/04/lead-acid-batteries-for-solar-storage/28297/
 * New batteries have a capacity smaller than the maximum as default start energy
 */
exports.SMALL_BATTERY = {
    DEFAULT_START_ENERGY: 4.5,
    MAX_CAPACITY: 6.5,
};
/**
 * The values are for large batteries which store a maximum of 950 kWh
 * which is approximately equal the amount of power for a building in a month
 * @see https://www.altenergymag.com/article/2018/03/california-pilots-a-new-approach-to-balancing-with-li-ion-energy-storage/28204/
 * New large batteries have a capacity smaller than the maximum implemented as default start energy
 */
exports.LARGE_BATTERY = {
    DEFAULT_START_ENERGY: 600,
    MAX_CAPACITY: 950,
};
/**
 * Each day a solar panel is roughly charged with electricity
 * for 4hours at a rate of 250 watts ~ 1000watts-hours
 * Solar panels have a range which they can produce
 * These solar panels will have a minimum 240 watts-hour when the sunlight is not enough
 */
exports.SOLAR_PANEL = {
    AREA: 10,
    DEFAULT_INITIAL_ENERGY: 250,
    KILOLUX_TO_KILOWATT_PER_SQUARE_METER: 0.0079,
    MIN_CAPACITY: 240,
    CLEAR_SKY_POWER_WATTS: 990,
    CLOUD_COVERAGE_SCALING_CONSTANT: 0.75,
};
var GRID_ITEM_NAMES;
(function (GRID_ITEM_NAMES) {
    GRID_ITEM_NAMES["GRID"] = "grid";
    GRID_ITEM_NAMES["ENERGY_USER"] = "energy_user";
    GRID_ITEM_NAMES["LARGE_BATTERY"] = "large_battery";
    GRID_ITEM_NAMES["SMALL_BATTERY"] = "small_battery";
    GRID_ITEM_NAMES["SOLAR_PANEL"] = "solar_panel";
})(GRID_ITEM_NAMES = exports.GRID_ITEM_NAMES || (exports.GRID_ITEM_NAMES = {}));
exports.GRID_DISTANCES = {
    // The discrete unit of distance for laying items apart, both vertically and horizontally
    // So, every item is 1 * INCREMENTS_KM, 2 * INCREMENTS_KM, 3 * INCREMENTS_KM, etc... km apart on the x and y plane
    INCREMENTS_KM: 0.5,
};
/**
 * Resistance of the differents components used in the grid
 * For transportation of power, wire 16 of awg is used for transmission lines
 * @see https://www.cs.rochester.edu/users/faculty/nelson/courses/csc_robocon/robot_manual/wiring.html#:~:text=Gauges%20of%20AWG%2016%20and,0%2C%2000%2C%20or%20larger.
 * The wires have a constant resistance per length
 * @see https://en.wikipedia.org/wiki/American_wire_gauge#Tables_of_AWG_wire_sizes for these values
 * The resistance is measured in ohms (Ω) unless specified otherwise
 * Buildings use majorly awg wire 13
 * @see https://homeguides.sfgate.com/estimate-amount-wire-needed-rewire-average-home-105819.html
 * Average house requires 7.25 rolls of a 50ft-roll
 * Batteries have inter resistance of about 0.7 - 1.2 Ω. In here, we are considering the average of these values
 * @see http://newport.eecs.uci.edu/~chou/pdf/chou-islped04-loadmatch.pdf
 * For small batteries we are considering the @insert value // TODO insert value
 * Solar panels have an average resistance of 3.617
 * @see http://waterheatertimer.org/Resistance-and-solar-panels.html
 */
exports.RESISTANCE = {
    BUILDING: 0.726,
    // TODO get the right value for the resistance of the grid
    GRID: 0.2,
    // Average resistance
    LARGE_BATTERY: 0.95,
    // Represents the resistances of awg wire 16
    RESISTANCE_16: 13.17,
    // TODO insert the correct resistance for the small batteries used
    SMALL_BATTERY: 0.4,
    // TODO insert the correct resistance for the solar panels used
    SOLAR_PANEL: 3.617,
};
/**
 * A building uses approximately 1000 KWh (kilo watts hour) per month,
 * which is approximately 32KWh per day and 1.3KWh per hour
 * @see https://homeprofessionals.org/solar/average-kwh-usage-for-a-2000-sq-ft-home/#:~:text=The%20average%202%2C000%20sq.,customer%20in%20a%20residential%20unit.
 */
exports.BUILDING = {
    DEFAULT_INITIAL_ENERGY: 1.3,
    MAX_CAPACITY: 10,
    MIN_CAPACITY: 0,
    /**
     * Source is from Research Gate
     * @see https://www.researchgate.net/publication/326358349/figure/fig2/AS:647731865477122@1531442719619/Average-daily-energy-consumption-during-the-weekdays-and-the-variation-throughout-the.png
     */
    ENERGY_USAGE_KILOWATT_BY_TIME_OF_DAY: {
        '0': 8,
        '1': 6,
        '2': 4.25,
        '3': 4,
        '4': 4.25,
        '5': 4,
        '6': 5,
        '7': 6.2,
        '8': 5,
        '9': 5,
        '10': 5,
        '11': 4.75,
        '12': 4.75,
        '13': 4.5,
        '14': 4.75,
        '15': 5,
        '16': 5.5,
        '17': 6,
        '18': 7,
        '19': 10,
        '20': 9.5,
        '21': 9,
        '22': 11,
        '23': 11,
    }
};
exports.TIME = {
    DISCRETE_UNIT_HOURS: 1,
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("graphlib");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __webpack_require__(12);
const server = new Server_1.Server();
server.listen();


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const express_1 = tslib_1.__importDefault(__webpack_require__(13));
const swaggerUi = tslib_1.__importStar(__webpack_require__(14));
const bodyParser = tslib_1.__importStar(__webpack_require__(15));
const morgan_1 = tslib_1.__importDefault(__webpack_require__(16));
const constants_1 = tslib_1.__importDefault(__webpack_require__(2));
const ErrorHandler_1 = __webpack_require__(18);
const routes_1 = __webpack_require__(20);
const Logger_1 = __webpack_require__(5);
__webpack_require__(66);
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
        const swaggerDocument = __webpack_require__(67);
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    // Leave port null so that the Heroku env variable can override it
    port: null
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(5);
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const tsoa_1 = __webpack_require__(6);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const BiogridController_1 = __webpack_require__(7);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "BiogridSimulationResults": {
        "dataType": "refObject",
        "properties": {
            "energyWastedFromSource": { "dataType": "double" },
            "energyWastedInTransportation": { "dataType": "double" },
            "timeWithoutEnoughEnergy": { "dataType": "double" },
            "townSize": { "dataType": "nestedObjectLiteral", "nestedProperties": { "height": { "dataType": "double", "required": true }, "width": { "dataType": "double", "required": true } }, "required": true },
            "states": { "dataType": "array", "array": { "dataType": "any" }, "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NewBiogridOpts": {
        "dataType": "refObject",
        "properties": {
            "startDate": { "dataType": "datetime", "required": true },
            "endDate": { "dataType": "datetime", "required": true },
            "smallBatteryCells": { "dataType": "double", "required": true },
            "largeBatteryCells": { "dataType": "double", "required": true },
            "numBuildings": { "dataType": "double", "required": true },
            "numSolarPanels": { "dataType": "double", "required": true },
            "townHeight": { "dataType": "double", "required": true },
            "townWidth": { "dataType": "double", "required": true },
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
    app.post('/api/biogrid/simulate', function (request, response, next) {
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
        const promise = controller.SimulateNewBiogrid.apply(controller, validatedArgs);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const biogrid_simulator_1 = __webpack_require__(3);
const constants_1 = tslib_1.__importDefault(__webpack_require__(2));
function createRandomBuildingPosition(townWidth, townHeight) {
    const x = Math.floor(Math.random() * townWidth);
    const y = Math.floor(Math.random() * townHeight);
    return {
        x,
        y,
    };
}
// TODO, allow users to specify where the buildings are on the grid rather than randomly scatter
// The issue can be found on https://github.com/googleinterns/step141-2020/issues/59
async function simulateNewBiogrid(body) {
    const buildings = [];
    for (let i = 0; i < body.numBuildings; i++) {
        const randomPos = createRandomBuildingPosition(body.townWidth, body.townHeight);
        buildings.push(new biogrid_simulator_1.Building({
            energy: biogrid_simulator_1.BUILDING.DEFAULT_INITIAL_ENERGY,
            x: randomPos.x,
            y: randomPos.y,
            gridItemName: `${biogrid_simulator_1.GRID_ITEM_NAMES.ENERGY_USER}-${i}`
        }));
    }
    const town = new biogrid_simulator_1.RuralArea(buildings, body.townWidth, body.townHeight);
    const biogrid = new biogrid_simulator_1.Biogrid(town, {
        numberOfLargeBatteryCells: body.largeBatteryCells,
        numberOfSmallBatteryCells: body.smallBatteryCells,
        numberOfSolarPanels: body.numSolarPanels,
    });
    const biobrain = biogrid_simulator_1.BioBrain.Instance;
    const initState = biogrid.getSystemState();
    const statesJson = [biogrid.getJsonGraphDetails()];
    const currentDate = body.startDate;
    for (let i = 0; i < constants_1.default.simulation.NUMBER_OF_SIM_CYCLES; i++) {
        // Start at midnight, increment hours until NUMBER_OF_SIM_CYCLES reached
        currentDate.setHours(i);
        biogrid.drainEnergyUsers(currentDate);
        const action = await biobrain.computeAction(initState, currentDate);
        biogrid.takeAction(action);
        statesJson.push(biogrid.getJsonGraphDetails());
    }
    return {
        energyWastedFromSource: 10,
        energyWastedInTransportation: 12,
        timeWithoutEnoughEnergy: 24,
        states: statesJson,
        townSize: biogrid.getTownSize(),
    };
}
exports.simulateNewBiogrid = simulateNewBiogrid;


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
const grid_simulator_1 = __webpack_require__(4);
const config_1 = __webpack_require__(1);
class BioBattery {
    /**
     * Take in a relativePosition which is generated by the grid class so that batteries
     * are evenly spaced out.
     * The relativePositions have been verified in the Biogrid class
     * @param x Distance from the left edge of the town
     * @param y Distance from the top edge of the town
     */
    constructor(batteryParams) {
        this.maxCapacity = config_1.SMALL_BATTERY.MAX_CAPACITY;
        this.relativePosition = { x: batteryParams.x, y: batteryParams.y };
        if (!this.validateInputs(batteryParams.energyInJoules, batteryParams.maxCapacity)) {
            // TODO return a tuple of from validate to with the boolean and unpassed validations
            throw new Error(`Cannot create a battery with values: (${batteryParams.energyInJoules}, ${batteryParams.maxCapacity})`);
        }
        this.energyInJoules = batteryParams.energyInJoules;
        if (batteryParams.maxCapacity) {
            this.maxCapacity = batteryParams.maxCapacity;
        }
        this.gridItemName = batteryParams.gridItemName;
        this.gridItemResistance = batteryParams.gridItemResistance;
    }
    getRelativePosition() {
        return this.relativePosition;
    }
    startCharging(inputPower) {
        if (this.energyInJoules + inputPower > this.maxCapacity) {
            this.energyInJoules = this.maxCapacity;
        }
        this.energyInJoules += inputPower;
    }
    // TODO implement when you use a formula for charging a battery
    stopCharging() { }
    supplyPower(outputenergy) {
        if (this.energyInJoules - outputenergy < 0) {
            //TODO implement the function to notify the request with amount of output left
            const temp = this.energyInJoules;
            this.energyInJoules = 0;
            return temp;
        }
        this.energyInJoules -= outputenergy;
        return outputenergy;
    }
    validateInputs(energyInJoules, maxCapacity = this.maxCapacity) {
        const batteryValidator = {
            value: energyInJoules,
            max: maxCapacity,
            isPositive: energyInJoules >= 0 && maxCapacity >= 0,
        };
        return grid_simulator_1.validate(batteryValidator);
    }
    getEnergyInJoules() {
        return this.energyInJoules;
    }
    getMaxCapacity() {
        return this.maxCapacity;
    }
    isEmpty() {
        return this.energyInJoules === 0;
    }
    isFull() {
        return this.energyInJoules === this.maxCapacity;
    }
}
exports.BioBattery = BioBattery;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


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
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(1);
/**
 * This function calculates the resistance of a given length of WIRE 16 AWG which is the one we are using for our transmission
 * The wire has a constant reistance per kilometre, thus multiplying by the length of the wire gives
 * the resistance of that whole wire
 * @param length the length of the wire which is synonymous to the distance between the supplier and reciever of power
 * @returns the resistance of the wire for calculate the power loss
 */
function calculateResistance(length, isMetre = false) {
    // Change the metre values to kilometres
    if (isMetre) {
        length = length / 1000;
    }
    return (_1.RESISTANCE.RESISTANCE_16 * length);
}
exports.calculateResistance = calculateResistance;
/**
 * This function calculates the current passing through the circuit at any given time using the physics
 * equation of calculating current, I = V / R where I is the current, V is voltage, R is resistance
 * @param voltage is the voltage of the circuit at that particular point
 * @param loadResistance is the resistance for the grid items in the shortest path
 * @param wireResistance is the resistance of the wires
 * @returns the current flowing in that particular circuit
 */
function calculateCurrent(voltage, loadResistance, wireResistance) {
    return (voltage / (loadResistance + wireResistance));
}
exports.calculateCurrent = calculateCurrent;
/**
 * This function calculates the voltage loss while passing through the wires using the physics
 * equation of calculating voltage. V = I * R where V is voltage, I is current and R is resistance
 * @param current is the current in the circuit
 * @param resistance is the resistance of the wires
 * @returns the voltage lost while transport through the wires
 */
function calculateVoltage(current, resistance) {
    return (current * resistance);
}
exports.calculateVoltage = calculateVoltage;
/**
 * This function calculates the power in the circuit for usage in the efficiency
 * It calculates this based on the two physics equations
 *    1. P = V * I
 *    2. I = V / R
 * where P is power, V is voltage, I is current and R is resistance
 * Since current is constant in circuits
 * Th final equation used is P = V^2 / R
 * @param voltage is the voltage in the circuit at that particular time
 * @param resistance is the resistance of the wires
 * @return the power transport over the given @param resistance
 */
function calculatePower(voltage, resistance) {
    return (Math.pow(voltage, 2) / resistance);
}
exports.calculatePower = calculatePower;
/**
 * This function calculates the power in the circuit for usage in the efficiency
 * It calculates this based on the two physics equations
 *    1. P = V * I
 *    2. V = I * R
 * where P is power, V is voltage, I is current and R is resistance
 * Since current is constant in circuits
 * Th final equation implemented is P = I^2 * R
 * @param current is the current in the circuit at that particular time
 * @param resistance is the resistance of the wires
 * @return the power transport over the given @param resistance
 */
function calculatePowerWithCurrent(current, resistance) {
    return (Math.pow(current, 2) * resistance);
}
exports.calculatePowerWithCurrent = calculatePowerWithCurrent;
/**
 * This function is used to calculate the current in the circuit using the given @param power
 * It calculates the current based on these physics equations for electricity
 *    1. P = V * I
 *    2. V = I * R
 * From these two equations, we can deduce that, 3. P = I^2 * R
 * where P is power, V is voltage, I is current and R is resistance
 * The final equation implemented is the reverse of equation 3, with I = sqrt(P * R)
 * @param power is the power coming in the circuit
 * @param resistance is the resistance of the circuit
 * @returns the current that is going through the circuit over the given @param resistance
 */
function calculateCurrentFromPower(power, resistance) {
    return Math.sqrt(power / resistance);
}
exports.calculateCurrentFromPower = calculateCurrentFromPower;
/**
 * This function is used to calculate the voltage in the circuit using the given @param power
 * @param power is the power coming in the circuit
 * @param resistance is the resistance of the circuit
 * @returns the voltage that is going through the circuit over the given @param resistance
 */
function calculateVoltageFromPower(power, resistance) {
    return Math.sqrt(power * resistance);
}
exports.calculateVoltageFromPower = calculateVoltageFromPower;
/**
 * This function calculates the efficiency of the circuit or system.
 * It bases this from the physics equation for calculting efficiency in a circuit
 * Efficiency = P_output / P_input * 100%
 * where P_output is the power output of the circuit, and P_input is the power input into that same circuit
 * @param input is the input Power at the beginning of the circuit
 * @param output is the output power at the end of the the circuit
 * @returns the efficiency of the system which is in percentages
 */
function calculateEfficiency(input, output) {
    return (output / input) * 100;
}
exports.calculateEfficiency = calculateEfficiency;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const biogrid_simulator_1 = __webpack_require__(3);
const config = tslib_1.__importStar(__webpack_require__(1));
const graphlib_1 = __webpack_require__(9);
const config_1 = __webpack_require__(1);
// We can only have one BioBrain per grid
class BioBrain {
    constructor() {
        this.clonedGraph = new graphlib_1.Graph();
    }
    // Access the singleton of the Brain
    static get Instance() {
        if (!this.instance) {
            this.instance = new BioBrain();
        }
        return this.instance;
    }
    async computeAction(state, date = new Date()) {
        // TODO calculate the efficiency for every transportation of power
        // Get the shortest distances between each gridItem to the rest of the gridItems
        const shortestDistances = state.getShortestDistances();
        // Create a clone of the graph becfore using it
        this.clonedGraph = state.cloneStateGraph();
        // Create an object of buildings with the energyProviders which supplied
        const buildingSuppliers = await this.chargeBuildings(shortestDistances, date);
        // Create an object of smallBatteries with the energyProviders which supplied
        const smallBatterySupplier = await this.chargeSmallBatteries(shortestDistances, date);
        // Create an object of largeBatteries with the energyProviders which supplied
        const largeBatterySupplier = await this.chargeLargebatteries(shortestDistances, date);
        const totalPowerInput = this.calculateTotalInputPower(buildingSuppliers.inputPower, smallBatterySupplier.inputPower, largeBatterySupplier.inputPower);
        const totalPowerOutput = this.calculateTotalOutputPower(buildingSuppliers.outputPower, smallBatterySupplier.outputPower, largeBatterySupplier.outputPower);
        const efficiency = config.calculateEfficiency(totalPowerInput, totalPowerOutput);
        return new biogrid_simulator_1.BiogridAction({
            ...buildingSuppliers.supplyingPath,
            ...smallBatterySupplier.supplyingPath,
            ...largeBatterySupplier.supplyingPath,
        }, efficiency);
    }
    calculateTotalInputPower(buildingInput, sBatteryInput, lBatteryInput) {
        return buildingInput + sBatteryInput + lBatteryInput;
    }
    calculateTotalOutputPower(buildingOutput, sBatteryOutput, lBatteryOutput) {
        return buildingOutput + sBatteryOutput + lBatteryOutput;
    }
    /**
     * This method gets the different griditems and places them in their respective classes
     * This is implemented from the cloned graph so that we can change the items without
     * changing the original state graph as well as keeping track of which supplying grid
     * item has given off power so that one doesn't call the same grid items and then get
     * an error as the item might not have energy in it
     * @returns an object of key-value pair @enum GRID_ITEM_NAMES : respective grid items list
     */
    getGridItems() {
        const buildings = [];
        const smallBatteries = [];
        const largeBatteries = [];
        const solarPanels = [];
        const allGridItems = this.clonedGraph.nodes();
        // TODO: Implement with instanceof
        // @see https://github.com/googleinterns/step141-2020/issues/54
        allGridItems.map((item) => {
            const gridItem = this.clonedGraph.node(item);
            if (gridItem.gridItemName.includes(config.GRID_ITEM_NAMES.ENERGY_USER)) {
                buildings.push(gridItem);
            }
            else if (gridItem.gridItemName.includes(config.GRID_ITEM_NAMES.SMALL_BATTERY)) {
                smallBatteries.push(gridItem);
            }
            else if (gridItem.gridItemName.includes(config.GRID_ITEM_NAMES.LARGE_BATTERY)) {
                largeBatteries.push(gridItem);
            }
            else if (gridItem.gridItemName.includes(config.GRID_ITEM_NAMES.SOLAR_PANEL)) {
                solarPanels.push(gridItem);
            }
        });
        return {
            [config.GRID_ITEM_NAMES.ENERGY_USER]: buildings,
            [config.GRID_ITEM_NAMES.SMALL_BATTERY]: smallBatteries,
            [config.GRID_ITEM_NAMES.LARGE_BATTERY]: largeBatteries,
            [config.GRID_ITEM_NAMES.SOLAR_PANEL]: solarPanels,
        };
    }
    /**
     * This method is used for charging individual largeBatteries which might not have enough energy
     * It calls the @method determineSupplyingPath which calculates which supplier can give these large batteries power
     * @returns @interface ResultingSupplyingPath which holds a key value pair of @interface supplyingPath requesting mapping to
     * the one which can supplying, powerInput, and powerOutput
     */
    async chargeLargebatteries(shortestDistances, date) {
        const gridItems = this.getGridItems();
        let largeBatteries = gridItems[config.GRID_ITEM_NAMES.LARGE_BATTERY];
        const solarPanels = gridItems[config.GRID_ITEM_NAMES.SOLAR_PANEL];
        // Assuming the large battery is not fully charged
        largeBatteries = largeBatteries.filter((battery) => !battery.isFull());
        // Filter the solar panels and remove the ones with the minimum energy or empty
        const solarPanelsFiltered = await this.filterSolarPanelsByEnergyAmount(solarPanels);
        // Create an array of the possible energy givers
        const allEnergyProviders = [...solarPanelsFiltered];
        return await this.determineSupplyingPath(largeBatteries, allEnergyProviders, shortestDistances, date);
    }
    /**
     * This method is used for charging individual smallBatteries which might not have energy energy
     * It calls the @method determineSupplyingPath which calculates which supplier can give these small batteries power
     * @returns @interface ResultingSupplyingPath which holds a key value pair of @interface supplyingPath requesting mapping to
     * the one which can supplying, powerInput, and powerOutput
     */
    async chargeSmallBatteries(shortestDistances, date) {
        const gridItems = this.getGridItems();
        let smallBatteries = gridItems[config.GRID_ITEM_NAMES.SMALL_BATTERY];
        let largeBatteries = gridItems[config.GRID_ITEM_NAMES.LARGE_BATTERY];
        const solarPanels = gridItems[config.GRID_ITEM_NAMES.SOLAR_PANEL];
        // Assuming the small batteries are not fully charged
        smallBatteries = smallBatteries.filter((battery) => !battery.isFull());
        // Filter the large batteries and remove the ones which do not have power in them
        largeBatteries = largeBatteries.filter((battery) => !battery.isEmpty());
        // Filter the solar panels and remove the ones with the minimum energy or empty
        const solarPanelsFiltered = await this.filterSolarPanelsByEnergyAmount(solarPanels);
        // Create an array of the possible energy givers
        const allEnergyProviders = [...solarPanelsFiltered, ...largeBatteries];
        return await this.determineSupplyingPath(smallBatteries, allEnergyProviders, shortestDistances, date);
    }
    /**
     * This method is used for charging the individual buildings which might not have energy energy
     * It calls the @method determineSupplyingPath which calculates which supplier can give these buildings power
     * @returns @interface ResultingSupplyingPath which holds a key value pair of @interface supplyingPath requesting mapping to
     * the one which can supplying, powerInput, and powerOutput
     */
    async chargeBuildings(shortestDistances, date) {
        const gridItems = this.getGridItems();
        let buildings = gridItems[config.GRID_ITEM_NAMES.ENERGY_USER];
        let smallBatteries = gridItems[config.GRID_ITEM_NAMES.SMALL_BATTERY];
        let largeBatteries = gridItems[config.GRID_ITEM_NAMES.LARGE_BATTERY];
        const solarPanels = gridItems[config.GRID_ITEM_NAMES.SOLAR_PANEL];
        // Assuming that the houses asking for power will not have power in them.
        // Do not consider building with full power capacity
        buildings = buildings.filter((building) => {
            return building.getEnergyInJoules() === building.getMinCapacity();
        });
        // Filter the batteries and removes the ones which do not have power in them
        // Do not include batteries which are empty
        smallBatteries = smallBatteries.filter((battery) => !battery.isEmpty());
        largeBatteries = largeBatteries.filter((battery) => !battery.isEmpty());
        // Filter the solar panels and remove the ones with the minimum energy or empty
        const solarPanelsFiltered = await this.filterSolarPanelsByEnergyAmount(solarPanels);
        // Create an array of the possible energy givers
        const allEnergyProviders = [
            ...smallBatteries,
            ...solarPanelsFiltered,
            ...largeBatteries,
        ];
        return await this.determineSupplyingPath(buildings, allEnergyProviders, shortestDistances, date);
    }
    /**
     * This method determines which grid item can supply energy to the grid item without it.
     * It determines this by considering the needs of the grid item requesting the enrgy and
     * minimizing the distance between the supplying grid items and the receiver. It returns a key pair of receiver to supplier
     * @param recievingAgents holds a list of grid items (buildings or batteries but not both) which are requesting for energy
     * @param supplyingAgents holds a list of grid items (@class BioBattery or @class SolarPanel)
     * which can supply energy to @param recievingAgents
     * @param shortestDistances holds an object of key, value pair of vertex -> adj vertices with their shortest distance to the key vertex
     * @returns @interface ResultingSupplyingPath which holds a key value pair of @interface supplyingPath requesting mapping to
     * the one which can supplying, powerInput, and powerOutput
     */
    async determineSupplyingPath(recievingAgents, supplyingAgents, shortestDistances, date) {
        // Create an object of buildings with the energyProviders which supplied
        const supplyToSupplyFromAgents = {};
        let totalPowerInput = 0;
        let totalPowerOutput = 0;
        // Look at each gridItem requesting for energy individually and keep track of the which grid item
        //  supplied it energy so that it can not be requested energy when it doesn't have it
        for (const recievingAgent of recievingAgents) {
            // get the energy which is being requested.
            // TODO: advancement For now implement all or nothing. If battery doesn't have all the energy required, ignore it
            // @see https://github.com/googleinterns/step141-2020/issues/54
            const energyReq = recievingAgent.getMaxCapacity() - recievingAgent.getEnergyInJoules();
            let powerSupplied = 0;
            // Get the voltage to be received
            const voltageReq = config.calculateVoltageFromPower(energyReq, recievingAgent.gridItemResistance);
            // Set the shortest distance between the two values supplier and receiver to be +infinity
            let shortestDistance = Number.POSITIVE_INFINITY;
            // Keep track of the batteryPosition
            let indexOfProvider = -1;
            // Check which supplier can offer the receiver energy, by the minimzing it's distances between
            // This has to change when you consider different sources giving the receiver energy
            for (let index = 0; index < supplyingAgents.length; index++) {
                // check the distance between the receiver and supplier. If it is the minimal, change the supplier index
                const newShortestDistance = shortestDistances[supplyingAgents[index].gridItemName][recievingAgent.gridItemName].distance;
                if (newShortestDistance < shortestDistance) {
                    // Calculate the resistance in the wires whose length is the shortest distance
                    const resistanceInWires = config.calculateResistance(newShortestDistance);
                    // calculate the resistance in all gridItems which are in the shortest path
                    const resistanceInGridItems = this.determineResistanceInShortestPath(supplyingAgents[index].gridItemName, recievingAgent.gridItemName, shortestDistances);
                    // The total resistance in the shortest path including the one for the gridItems in the shortest path
                    const totalResistance = resistanceInGridItems + resistanceInWires;
                    // Calculate the circuit current. The circuit here is in series which implies that the current is constant
                    const currentInCircuit = config.calculateCurrent(voltageReq, resistanceInGridItems, resistanceInWires);
                    // Using the current, calculate the power in the entire circuit
                    const energyProvided = config.calculatePowerWithCurrent(currentInCircuit, totalResistance);
                    // Get the total energy which can be supplied by the supplying agent
                    let energyInSupplier;
                    if (supplyingAgents[index].gridItemName.includes(config_1.GRID_ITEM_NAMES.SOLAR_PANEL)) {
                        energyInSupplier = await supplyingAgents[index].getEnergyInJoules(date);
                    }
                    else {
                        energyInSupplier = await Promise.resolve(supplyingAgents[index].getEnergyInJoules());
                    }
                    if (energyInSupplier >= energyProvided) {
                        shortestDistance = newShortestDistance;
                        indexOfProvider = index;
                        powerSupplied = energyProvided;
                    }
                }
            }
            // In case there is no supplier for that receiver, ignore the reciever
            // TODO advancement, tell the grid about these cases of receiver asking for more than it can be given
            // @see https://github.com/googleinterns/step141-2020/issues/54
            if (indexOfProvider === -1) {
                continue;
            }
            // Update the power output and power input
            totalPowerOutput += energyReq;
            totalPowerInput += powerSupplied;
            // Update the supplier so that it cannot be asked for power again when it shouldn't be asked
            const provideFrom = supplyingAgents[indexOfProvider];
            const provideTo = recievingAgent;
            this.clonedGraph.setNode(provideFrom.gridItemName, provideFrom);
            this.clonedGraph.setNode(provideTo.gridItemName, provideTo);
            // Add the pair of receiver : supplier in supplyToSupplyFromAgents
            supplyToSupplyFromAgents[recievingAgent.gridItemName] =
                supplyingAgents[indexOfProvider].gridItemName;
        }
        return await {
            supplyingPath: supplyToSupplyFromAgents,
            inputPower: totalPowerInput,
            outputPower: totalPowerOutput,
        };
    }
    /**
     * This method determmines which grid item is in the shortest path.
     * @param start is the starting gridItem name in the shortestPath
     * @param dest is gridItem name for the destination in the shortestPath
     * @param shortestDistances holds an object of key, value pair of vertex -> adj vertices with their shortest distance to the key vertex
     * @returns a list of the names for the gridItems in the shortestPath
     */
    determineGridItemsInShortestPath(start, dest, shortestDistances) {
        // Keeps track of the gridItems through which the power is going to pass
        let gridItemsInShortestPath = [dest];
        // Keeps track of the parent / predecessor of a vertex in the shortest distance path
        let parent = shortestDistances[start][dest].predecessor;
        while (parent !== start) {
            gridItemsInShortestPath.push(parent);
            parent = shortestDistances[start][parent].predecessor;
        }
        gridItemsInShortestPath.push(start);
        return gridItemsInShortestPath;
    }
    /**
     * This method determines the resistance of the gridItems in the shortest path.
     * @param start is the starting gridItem name in the shortestPath
     * @param dest is gridItem name for the destination in the shortestPath
     * @param shortestDistances holds an object of key, value pair of vertex -> adj vertices with their shortest distance to the key vertex
     * @returns the total resistance of the gridItems in the shortest path excluding the wires (shortest distance itself)
     */
    determineResistanceInShortestPath(start, dest, shortestDistances) {
        const gridItemsInShortestPath = this.determineGridItemsInShortestPath(start, dest, shortestDistances);
        let gridItemResistance = 0;
        for (const gridItemName of gridItemsInShortestPath) {
            const gridItem = this.clonedGraph.node(gridItemName);
            gridItemResistance += gridItem.gridItemResistance;
        }
        return gridItemResistance;
    }
    async filterSolarPanelsByEnergyAmount(solarPanels) {
        const solarPanelsFiltered = [];
        for (let i = 0; i < solarPanels.length; i++) {
            const solarPanel = solarPanels[i];
            if (!(await solarPanel.isEmpty())) {
                solarPanelsFiltered.push(solarPanel);
            }
        }
        return solarPanelsFiltered;
    }
}
exports.BioBrain = BioBrain;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const weather_1 = __webpack_require__(51);
const bioenergy_source_1 = __webpack_require__(55);
const grid_simulator_1 = __webpack_require__(4);
const config_1 = __webpack_require__(1);
class SolarPanel extends bioenergy_source_1.EnergySource {
    /**
     * @param efficiency - default to 17.5% efficiency as solar panels are often between 15% and 20% efficiency
     */
    constructor(solarPanelParams) {
        super(solarPanelParams);
        this.gridItemResistance = config_1.RESISTANCE.SOLAR_PANEL;
        if (!this.validateInputsSolarPanel(solarPanelParams.areaSquareMeters)) {
            throw new Error(`Cannot create a solar panel object with values of area ${solarPanelParams.areaSquareMeters}`);
        }
        this.areaSquareMeters = solarPanelParams.areaSquareMeters;
        this.gridItemName = solarPanelParams.gridItemName;
        this.date = solarPanelParams.date ? solarPanelParams.date : new Date();
        this.weatherLib = new weather_1.WeatherLib(this.date, this.longitude, this.latitude);
    }
    validateInputsSolarPanel(area) {
        const validator = {
            value: area,
            isPositive: area >= 0,
        };
        return grid_simulator_1.validate(validator);
    }
    async getPowerAmount(date) {
        if (!this.weatherLib.isSetup()) {
            await this.weatherLib.setup();
        }
        // Solar panels do not produce energy at night
        if (!this.weatherLib.isDay(date)) {
            return 0;
        }
        const cloudCoverage = this.weatherLib.getCloudCoverage(date);
        const powerPerSqrMeter = this.cloudCoverageToKiloWattsPerSquareMeter(cloudCoverage);
        return powerPerSqrMeter * this.areaSquareMeters * this.efficiency;
    }
    supplyPower(requiredPower) {
        // TODO implement this when you return the amount of power
        // TODO that the solar panel holds at the particular moment
        // subtract requiredPower from the current and return it, keep track of the remaining power
        return requiredPower;
    }
    /**
     * This method returns the current power that can be generated by
     * the solar panel at that given time
     */
    async getEnergyInJoules(date) {
        return await this.getPowerAmount(this.date || date);
    }
    async isEmpty() {
        return (await this.getEnergyInJoules()) === 0;
    }
    cloudCoverageToKiloWattsPerSquareMeter(cloudCoverage) {
        // CalculationDerived from https://scool.larc.nasa.gov/lesson_plans/CloudCoverSolarRadiation.pdf
        return ((config_1.SOLAR_PANEL.CLEAR_SKY_POWER_WATTS *
            (1 -
                config_1.SOLAR_PANEL.CLOUD_COVERAGE_SCALING_CONSTANT *
                    Math.pow(cloudCoverage, 3))) /
            1000);
    }
}
exports.SolarPanel = SolarPanel;


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
const tslib_1 = __webpack_require__(0);
const node_fetch_1 = tslib_1.__importDefault(__webpack_require__(53));
// TODO put api keys into their own lib
// eslint-disable-next-line @typescript-eslint/no-var-requires
const apiKey = __webpack_require__(54);
class WeatherLib {
    constructor(day, longitude, latitude) {
        this.day = day;
        this.longitude = longitude;
        this.latitude = latitude;
        this.weatherData = {};
        this.setupOccured = false;
    }
    async setup() {
        const url = `http://api.weatherapi.com/v1/history.json?key=${apiKey.weatherapi}&q=${this.latitude},${this.longitude}&dt=${this.formatDate(this.day)}`;
        const ret = await node_fetch_1.default(url);
        const body = await ret.json();
        this.weatherData = body.forecast.forecastday[0].hour
            .map((period) => {
            return {
                time: this.formatDateWithHour(new Date(period.time)),
                cloudCoverage: period.cloud / 100,
                isDay: period.is_day === 1,
            };
        })
            .reduce((map, obj) => {
            map[obj.time] = {
                cloudCoverage: obj.cloudCoverage,
                isDay: obj.isDay,
            };
            return map;
        }, {});
        this.setupOccured = true;
    }
    isSetup() {
        return this.setupOccured;
    }
    getCloudCoverage(date) {
        const dateFormatted = this.formatDateWithHour(date);
        if (!this.weatherData[dateFormatted]) {
            throw new Error(`Date ${dateFormatted} not found within the specified time range`);
        }
        return this.weatherData[dateFormatted].cloudCoverage;
    }
    isDay(date) {
        const dateFormatted = this.formatDateWithHour(date);
        if (!this.weatherData[dateFormatted]) {
            throw new Error(`Date ${dateFormatted} not found within the specified time range`);
        }
        return this.weatherData[dateFormatted].isDay;
    }
    formatDateWithHour(date) {
        return `${this.formatDate(date)}:${date.getHours()}`;
    }
    formatDate(date) {
        let d = new Date(date), month = `${(d.getMonth() + 1)}`, day = `${d.getDate()}`, year = d.getFullYear();
        if (month.length < 2)
            month = `0${month}`;
        if (day.length < 2)
            day = `0${day}`;
        return [year, month, day].join('-');
    }
}
exports.WeatherLib = WeatherLib;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 54 */
/***/ (function(module) {

module.exports = JSON.parse("{\"weatherapi\":\"2e19a5f6f1134a61831111446202307\"}");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grid_simulator_1 = __webpack_require__(4);
class EnergySource {
    constructor(energyParams) {
        // Long and latitude for the solar panel's position
        this.longitude = 0;
        this.latitude = 0;
        this.position = { x: energyParams.x, y: energyParams.y };
        if (!this.validateInputs(energyParams.efficiency)) {
            throw new Error(`Cannot create a solar panel object with values: (${energyParams.efficiency})`);
        }
        this.efficiency = energyParams.efficiency;
        if (energyParams.longitude) {
            this.longitude = energyParams.longitude;
        }
        if (energyParams.latitude) {
            this.latitude = energyParams.latitude;
        }
    }
    validateInputs(efficiency) {
        const efficiencyValidator = {
            value: efficiency,
            min: 0,
            max: 1,
            isPositive: efficiency >= 0,
        };
        return grid_simulator_1.validate(efficiencyValidator);
    }
    getRelativePosition() {
        return this.position;
    }
}
exports.EnergySource = EnergySource;


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
const tslib_1 = __webpack_require__(0);
const bioconstants = tslib_1.__importStar(__webpack_require__(8));
const biogrid_simulator_1 = __webpack_require__(3);
class Biogrid {
    constructor(town, opts) {
        this.town = town;
        // A dictionary with the position as its key
        // Used to keep track of whether an item is already placed in a position
        this.itemInPosition = {};
        const todayMidnight = new Date();
        todayMidnight.setHours(0);
        this.startDate = opts.startDate || todayMidnight;
        // Batteries
        const smallBatteryPositions = this.createGridItemPositions(town.getTownSize(), opts.numberOfSmallBatteryCells);
        const largeBatteryPositions = this.createGridItemPositions(town.getTownSize(), opts.numberOfLargeBatteryCells);
        this.smallBatteries = this.createBatteries(smallBatteryPositions, bioconstants.GRID_ITEM_NAMES.SMALL_BATTERY);
        this.largeBatteries = this.createBatteries(largeBatteryPositions, bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY);
        // Energy Source
        // TODO implement the solar panels
        const solarPanelPositions = this.createGridItemPositions(town.getTownSize(), opts.numberOfSolarPanels);
        this.solarPanels = this.createSolarPanels(solarPanelPositions);
        this.state = new biogrid_simulator_1.BiogridState(this.createGridItems(), town.getTownSize());
        // Set the effieciency to 0 at the beginning
        this.efficiency = 0;
    }
    createGridItems() {
        return [
            ...this.smallBatteries,
            ...this.largeBatteries,
            ...this.town.getEnergyUsers(),
            ...this.solarPanels,
        ];
    }
    getTownSize() {
        return this.town.getTownSize();
    }
    getSystemState() {
        return this.state;
    }
    getEfficiency() {
        return this.efficiency;
    }
    getJsonGraphDetails() {
        return this.state.getJsonGraph();
    }
    createBatteries(positions, gridItemName) {
        const batteryResistance = gridItemName === bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY
            ? bioconstants.RESISTANCE.LARGE_BATTERY
            : bioconstants.RESISTANCE.SMALL_BATTERY;
        const maxCapacity = gridItemName === bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY
            ? bioconstants.LARGE_BATTERY.MAX_CAPACITY
            : bioconstants.SMALL_BATTERY.MAX_CAPACITY;
        const initEnergy = gridItemName === bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY
            ? bioconstants.LARGE_BATTERY.DEFAULT_START_ENERGY
            : bioconstants.SMALL_BATTERY.DEFAULT_START_ENERGY;
        return positions.map((position, index) => new biogrid_simulator_1.BioBattery({
            x: position.x,
            y: position.y,
            gridItemName: `${gridItemName}-${index}`,
            gridItemResistance: batteryResistance,
            energyInJoules: initEnergy,
            maxCapacity,
        }));
    }
    /**
     * This method creates a list of solar panels placed depending on their positions
     * @param positions holds the positions where the solar panels are going to be placed
     */
    // TODO pass a list of equal length to hold the area for the solar panels
    createSolarPanels(positions) {
        return positions.map((position, index) => new biogrid_simulator_1.SolarPanel({
            x: position.x,
            y: position.y,
            efficiency: 0.75,
            areaSquareMeters: bioconstants.SOLAR_PANEL.AREA,
            gridItemName: `${bioconstants.GRID_ITEM_NAMES.SOLAR_PANEL}-${index}`,
            date: this.startDate,
        }));
    }
    /**
     * Drain the energy users according to the time of day
     */
    drainEnergyUsers(date) {
        this.town.getEnergyUsers().forEach((energyUser) => {
            energyUser.decreaseEnergyAccordingToTimeOfDay(date);
        });
    }
    /**
     * This method takes the results of th brain and then it changes the state graph as suggested by the brain.
     * The results of the brain are in form of an object key:value pair, with the receiver gridItemName as key and supplier gridItemName as value
     * @param action holds the results from the brain
     * @returns a the current state with a new graph which includes the changes that were suggested by the brain
     */
    takeAction(action) {
        const powerEdges = [];
        // Set new efficiency
        this.efficiency = action.getEfficiency();
        // RETURN a new BiogridState
        const allSupplyingPaths = action.getSupplyingPaths();
        this.state.resetPowerOnEdges();
        const clonedGraph = this.state.cloneStateGraph();
        for (const supplyPath in allSupplyingPaths) {
            const oldGridItem = this.state.getGridItem(supplyPath);
            // take energy from the supplying grid item and transfer it to the energy user
            const supplyingGridItem = this.state.getGridItem(allSupplyingPaths[supplyPath]);
            const typeOldGridItem = this.getGridItemType(oldGridItem);
            const energyUser = oldGridItem;
            const energyUserReq = energyUser.getMaxCapacity() - energyUser.getEnergyInJoules();
            const typeSupplyingGridItem = this.getGridItemType(supplyingGridItem);
            if (typeOldGridItem === bioconstants.GRID_ITEM_NAMES.ENERGY_USER) {
                if (typeSupplyingGridItem === bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY ||
                    typeSupplyingGridItem === bioconstants.GRID_ITEM_NAMES.SMALL_BATTERY) {
                    const battery = supplyingGridItem;
                    battery.supplyPower(energyUserReq);
                    clonedGraph.setNode(battery.gridItemName, battery);
                }
                else if (typeSupplyingGridItem === bioconstants.GRID_ITEM_NAMES.SOLAR_PANEL) {
                    const solarpanel = supplyingGridItem;
                    solarpanel.supplyPower(energyUserReq);
                    clonedGraph.setNode(solarpanel.gridItemName, solarpanel);
                }
                else {
                    continue;
                }
                energyUser.increaseEnergy(energyUserReq);
                clonedGraph.setNode(energyUser.gridItemName, energyUser);
            }
            else if (typeOldGridItem === bioconstants.GRID_ITEM_NAMES.SMALL_BATTERY) {
                if (typeSupplyingGridItem === bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY) {
                    const battery = supplyingGridItem;
                    battery.supplyPower(energyUserReq);
                    clonedGraph.setNode(battery.gridItemName, battery);
                }
                else if (typeSupplyingGridItem === bioconstants.GRID_ITEM_NAMES.SOLAR_PANEL) {
                    const solarpanel = supplyingGridItem;
                    solarpanel.supplyPower(energyUserReq);
                    clonedGraph.setNode(solarpanel.gridItemName, solarpanel);
                }
                else {
                    continue;
                }
                energyUser.startCharging(energyUserReq);
                clonedGraph.setNode(energyUser.gridItemName, energyUser);
            }
            else if (typeOldGridItem === bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY) {
                if (typeSupplyingGridItem === bioconstants.GRID_ITEM_NAMES.SOLAR_PANEL) {
                    const solarpanel = supplyingGridItem;
                    solarpanel.supplyPower(energyUserReq);
                }
                else {
                    continue;
                }
                energyUser.startCharging(energyUserReq);
                clonedGraph.setNode(energyUser.gridItemName, energyUser);
            }
            powerEdges.push({
                v: supplyingGridItem.gridItemName,
                w: energyUser.gridItemName,
                // convert kilowatthours into kilowatts
                power: energyUserReq / bioconstants.TIME.DISCRETE_UNIT_HOURS,
            });
        }
        this.state.setnewStateGraph(clonedGraph);
        powerEdges.forEach((powerEdge) => {
            this.state.setPowerBetweenNodes(powerEdge.v, powerEdge.w, powerEdge.power);
        });
        return this.state;
    }
    getGridItemType(gridItem) {
        if (gridItem.gridItemName.includes(bioconstants.GRID_ITEM_NAMES.ENERGY_USER)) {
            return bioconstants.GRID_ITEM_NAMES.ENERGY_USER;
        }
        else if (gridItem.gridItemName.includes(bioconstants.GRID_ITEM_NAMES.SMALL_BATTERY)) {
            return bioconstants.GRID_ITEM_NAMES.SMALL_BATTERY;
        }
        else if (gridItem.gridItemName.includes(bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY)) {
            return bioconstants.GRID_ITEM_NAMES.LARGE_BATTERY;
        }
        else if (gridItem.gridItemName.includes(bioconstants.GRID_ITEM_NAMES.SOLAR_PANEL)) {
            return bioconstants.GRID_ITEM_NAMES.SOLAR_PANEL;
        }
        return bioconstants.GRID_ITEM_NAMES.GRID;
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
            const newPositionUnverified = {
                x: this.roundToGridDistance((((i % cols) + 0.5) / cols) * townSize.width),
                y: this.roundToGridDistance(((Math.floor(i / cols) + 0.5) / rows) * townSize.height),
            };
            const newPosition = this.findNearestUnoccupiedPosition(newPositionUnverified, townSize);
            positions.push(newPosition);
            this.itemInPosition[this.formatItemPosition(newPosition)] = true;
        }
        return positions;
    }
    /**
     * Find the nearest unoccupied position to {@code pos} by looking looking in a spiral with pos at its center
     * First the space immediately right of pos is checked, then the one above, then to the left, then below, then two right spaces out, two right up, etc
     */
    findNearestUnoccupiedPosition(pos, townSize) {
        let radius = bioconstants.GRID_DISTANCES.INCREMENTS_KM;
        let angle = 0;
        let outOfBoundsCount = 0;
        let xOffset = 0, yOffset = 0;
        let newPos = { x: pos.x + xOffset, y: pos.y + yOffset };
        // If {@code outOfBoundsCount} is greater than 3, then that means the upwards, left, right, and down
        // Are all out of bounds. Thus there is no where left to place the item
        while ((this.positionOutOfBounds(newPos, townSize) ||
            this.positionOccupied(newPos)) &&
            outOfBoundsCount < 4) {
            if (this.positionOutOfBounds(newPos, townSize)) {
                outOfBoundsCount++;
            }
            switch (angle) {
                case 0:
                    yOffset = 0;
                    xOffset = radius;
                    break;
                case 90:
                    xOffset = 0;
                    yOffset = radius;
                    break;
                case 180:
                    xOffset = -1 * radius;
                    yOffset = 0;
                    break;
                case 270:
                    xOffset = 0;
                    yOffset = -1 * radius;
                    break;
            }
            newPos = { x: pos.x + xOffset, y: pos.y + yOffset };
            // Increment the angle by 90 degrees
            angle = angle + 90;
            if (angle === 360) {
                radius += bioconstants.GRID_DISTANCES.INCREMENTS_KM;
                // Reset the angle
                angle = 0;
            }
        }
        if (outOfBoundsCount > 3) {
            throw new Error(`There are too many items on the grid. New items could not be placed with a minimum distance of ${bioconstants.GRID_DISTANCES.INCREMENTS_KM} km apart`);
        }
        return newPos;
    }
    positionOutOfBounds(pos, townSize) {
        return pos.x > townSize.width || pos.y > townSize.height;
    }
    roundToGridDistance(distance) {
        return (Math.floor(distance / bioconstants.GRID_DISTANCES.INCREMENTS_KM) *
            bioconstants.GRID_DISTANCES.INCREMENTS_KM);
    }
    positionOccupied(pos) {
        return this.itemInPosition[this.formatItemPosition(pos)];
    }
    /**
     * Convert an item into a string
     */
    formatItemPosition(pos) {
        return `${pos.x}, ${pos.y}`;
    }
}
exports.Biogrid = Biogrid;


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
class BiogridAction {
    constructor(supplyPath, efficiency) {
        this.supplyPath = supplyPath;
        this.efficiency = efficiency;
    }
    getSupplyingPaths() {
        return this.supplyPath;
    }
    getEfficiency() {
        return this.efficiency;
    }
}
exports.BiogridAction = BiogridAction;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const graphlib = tslib_1.__importStar(__webpack_require__(9));
const config_1 = __webpack_require__(1);
class BiogridState {
    // TODO think about implement it StateGraphVertex[] as an object of key: name -> value: StateGraphVertex
    constructor(vertices, townSize) {
        this.townSize = townSize;
        // Directed so as to have two edges between A and B, but in opposite directions
        this.graph = new graphlib.Graph({ directed: true });
        // Initialize the graph with a grid which is a gridItem and has position (0, 0) to keep track of where the items are placed on the map
        const grid = {
            gridItemName: config_1.GRID_ITEM_NAMES.GRID,
            gridItemResistance: config_1.RESISTANCE.GRID,
            // Add the grid in the center of the town based on the townSize
            getRelativePosition() {
                return {
                    x: Math.floor(townSize.width / 2),
                    y: Math.floor(townSize.height / 2),
                };
            }
        };
        this.graph.setNode(grid.gridItemName, grid);
        // Add all the vertices as nodes/vertices of the graph, with a name for
        // the particular grid item and label which is data for the particular vertex as the GridItem itself
        vertices.map((vertex) => this.graph.setNode(vertex.gridItemName, vertex));
        // Add all the edges that can be formed into the graph, read the add method for how it is done
        vertices.map((vertex) => this.connectNewVertex(vertex));
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
     * setnewStateGraph sets a new graph for the state of the grid after any changes
     * @param newGraph holds the new state graph for the grid
     */
    setnewStateGraph(newGraph) {
        this.graph = newGraph;
    }
    /**
     * Set power between the nodes via the edges of the state graph
     */
    setPowerBetweenNodes(v, w, power) {
        const labelFromV = this.graph.edge(v, config_1.GRID_ITEM_NAMES.GRID);
        const labelToW = this.graph.edge(config_1.GRID_ITEM_NAMES.GRID, w);
        this.graph.setEdge(v, config_1.GRID_ITEM_NAMES.GRID, { distance: labelFromV.distance, power });
        this.graph.setEdge(config_1.GRID_ITEM_NAMES.GRID, w, { distance: labelToW.distance, power });
    }
    /**
     * Set all edge power to 0
     */
    resetPowerOnEdges() {
        const edges = this.graph.edges();
        edges.forEach((edge) => this.resetEdge(edge));
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
     * @param gridItemName is the string that represents the GridItem you are searching for
     */
    getGridItem(gridItemName) {
        return this.graph.node(gridItemName);
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
            return graph.edge(edge).distance;
        };
    }
    /**
     * Reset an edge by changing its power to 0
     */
    resetEdge(edge) {
        const labels = this.graph.edge(edge);
        this.graph.setEdge(edge.v, edge.w, {
            distance: labels.distance,
            power: 0
        });
    }
    /**
     * When given a specific edge, return the weight or distance between the two vertices
     * @param edge is the Edge of the graph which you would like to get
     * @returns the weight or the distance between the vertices of @param edge
     */
    getWeightEdge(edge) {
        return this.graph.edge(edge).distance;
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
     * | symbol means a connection either from top - down, or down - top
     *                                     FROM GRID----->building<----------------------------------->building<---FROM GRID
     *                                                     ^--|                                   |------^
     *                                                        |----------S.SMALL_BATTERY----------|
     *                                                                               ^-----|
     *                  L.LARGE_BATTERY<------------------------------------>GRID<---------|
     *                            FROM SOLAR PANEL TO GRID (from down)--------| |----FROM SOLAR PANEL TO GRID (from down)
     *                                                  SOLAR_PANEL---------->| |<--------------SOLAR_PANEL
     * @param newVertex is the new item of the Grid to add to @param this.graph as displayed above
     */
    connectNewVertex(newVertex) {
        const newVertexName = newVertex.gridItemName;
        for (const vertex of this.graph.nodes()) {
            const distance = this.calculateDistance(newVertex, this.graph.node(vertex));
            let edge;
            // Solar panels to the grid only
            // Searching for includes GRID so that when scaling it is easy to add multiple grids
            if (newVertexName.includes(config_1.GRID_ITEM_NAMES.SOLAR_PANEL) &&
                vertex.includes(config_1.GRID_ITEM_NAMES.GRID)) {
                edge = { v: newVertexName, w: vertex, weight: distance };
            }
            else if (newVertexName.includes(config_1.GRID_ITEM_NAMES.LARGE_BATTERY) &&
                vertex.includes(config_1.GRID_ITEM_NAMES.GRID)) {
                edge = { v: newVertexName, w: vertex, weight: distance };
                // Add the opposite edge from grid to battery
                this.graph.setEdge(vertex, newVertexName, { distance });
            }
            else if (newVertexName.includes(config_1.GRID_ITEM_NAMES.SMALL_BATTERY)) {
                if (vertex.includes(config_1.GRID_ITEM_NAMES.GRID)) {
                    edge = { v: newVertexName, w: vertex, weight: distance };
                    // Add the opposite edge from grid to battery
                    this.graph.setEdge(vertex, newVertexName, { distance });
                }
                else if (vertex.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER)) {
                    edge = { v: newVertexName, w: vertex, weight: distance };
                }
                else {
                    // Continue since there is no edge to create
                    continue;
                }
            }
            // On gridItem Energy User do not add edge (A, A)
            else if (newVertexName.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER) &&
                vertex !== newVertexName) {
                if (vertex.includes(config_1.GRID_ITEM_NAMES.GRID) ||
                    vertex.includes(config_1.GRID_ITEM_NAMES.SMALL_BATTERY)) {
                    edge = { v: vertex, w: newVertexName, weight: distance };
                }
                else if (vertex.includes(config_1.GRID_ITEM_NAMES.ENERGY_USER)) {
                    edge = { v: newVertexName, w: vertex, weight: distance };
                    // Add the reverse edge from the new energy user/ building to the other building
                    this.graph.setEdge(vertex, newVertexName, { distance });
                }
                else {
                    // Continue since there is no edge to create
                    continue;
                }
            }
            else {
                // Do not connect the parts of the grid which don't have to be connected
                continue;
            }
            this.graph.setEdge(edge.v, edge.w, { distance: edge.weight });
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
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
    constructor(buildingParams) {
        // Initial id value, will be changed by rural area.
        this.buildingId = -1;
        /** Defines the resistance of the building due to the wiring */
        this.gridItemResistance = config_1.RESISTANCE.BUILDING;
        this.minCapacity = config_1.BUILDING.MIN_CAPACITY;
        this.maxCapacity = config_1.BUILDING.MAX_CAPACITY;
        this.relativePosition = { x: buildingParams.x, y: buildingParams.y };
        this.gridItemName = buildingParams.gridItemName;
        if (this.isPositive(buildingParams.energy)) {
            this.energyKilowatt = buildingParams.energy;
        }
        else {
            throw new Error("Can't create a building with negative energy!");
        }
        if (buildingParams.minCapacity) {
            this.minCapacity = buildingParams.minCapacity;
        }
        if (buildingParams.maxCapacity) {
            this.maxCapacity = buildingParams.maxCapacity;
        }
    }
    getMinCapacity() {
        return this.minCapacity;
    }
    getMaxCapacity() {
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
        return this.energyKilowatt;
    }
    decreaseEnergyAccordingToTimeOfDay(date) {
        const energyUsed = this.getAverageEnergyUsagePerDay(date.getHours());
        this.decreaseEnergy(energyUsed);
    }
    /**
     * This method adds energy to the current building's power.
     */
    increaseEnergy(energy) {
        if (this.isPositive(energy)) {
            this.energyKilowatt += energy;
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
        if (energy >= this.energyKilowatt) {
            this.energyKilowatt = 0;
        }
        else {
            this.energyKilowatt -= energy;
        }
    }
    getAverageEnergyUsagePerDay(hourOfDay) {
        return config_1.BUILDING.ENERGY_USAGE_KILOWATT_BY_TIME_OF_DAY[hourOfDay.toString()];
    }
}
exports.Building = Building;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(7), exports);


/***/ }),
/* 67 */
/***/ (function(module) {

module.exports = JSON.parse("{\"basePath\":\"/service\",\"consumes\":[\"application/json\"],\"definitions\":{\"BiogridSimulationResults\":{\"properties\":{\"energyWastedFromSource\":{\"type\":\"number\",\"format\":\"double\",\"x-nullable\":true},\"energyWastedInTransportation\":{\"type\":\"number\",\"format\":\"double\",\"x-nullable\":true},\"timeWithoutEnoughEnergy\":{\"type\":\"number\",\"format\":\"double\",\"x-nullable\":true},\"townSize\":{\"properties\":{\"width\":{\"type\":\"number\",\"format\":\"double\"},\"height\":{\"type\":\"number\",\"format\":\"double\"}},\"required\":[\"height\",\"width\"],\"type\":\"object\"},\"states\":{\"items\":{\"additionalProperties\":true,\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"townSize\",\"states\"],\"type\":\"object\",\"additionalProperties\":true},\"NewBiogridOpts\":{\"properties\":{\"startDate\":{\"type\":\"string\",\"format\":\"date-time\"},\"endDate\":{\"type\":\"string\",\"format\":\"date-time\"},\"smallBatteryCells\":{\"type\":\"number\",\"format\":\"double\"},\"largeBatteryCells\":{\"type\":\"number\",\"format\":\"double\"},\"numBuildings\":{\"type\":\"number\",\"format\":\"double\"},\"numSolarPanels\":{\"type\":\"number\",\"format\":\"double\"},\"townHeight\":{\"type\":\"number\",\"format\":\"double\"},\"townWidth\":{\"type\":\"number\",\"format\":\"double\"}},\"required\":[\"startDate\",\"endDate\",\"smallBatteryCells\",\"largeBatteryCells\",\"numBuildings\",\"numSolarPanels\",\"townHeight\",\"townWidth\"],\"type\":\"object\",\"additionalProperties\":true}},\"info\":{\"title\":\"TSOA\",\"version\":\"1.0.0\",\"description\":\"Build swagger-compliant REST APIs using TypeScript and Node\",\"license\":{\"name\":\"MIT\"}},\"paths\":{\"/biogrid/simulate\":{\"post\":{\"operationId\":\"SimulateNewBiogrid\",\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"\",\"schema\":{\"$ref\":\"#/definitions/BiogridSimulationResults\"}}},\"security\":[],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/NewBiogridOpts\"}}]}}},\"produces\":[\"application/json\"],\"swagger\":\"2.0\",\"securityDefinitions\":{}}");

/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map
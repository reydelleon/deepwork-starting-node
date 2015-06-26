/**
 * @module
 * @author      Reydel Leon Machado
 * @copyright   (c) 2015 Reydel Leon Machado
 * @license     Licensed under MIT license
 */

'use strict';

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/": requestHandlers.start,
    "/start": requestHandlers.start,
    "/upload": requestHandlers.upload
};

server.start(router.route, handle);
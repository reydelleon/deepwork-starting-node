/**
 * @module      server
 * @author      Reydel Leon Machado
 * @copyright   (c) 2015 Reydel Leon Machado
 * @license     Licensed under MIT license
 */

'use strict';

var http = require("http");
var url = require("url");

function start(route, handle) {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response);
    };

    http.createServer(onRequest).listen(3000);

    console.log("Server listening on port 3000");
}

exports.start = start;
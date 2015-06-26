/**
 * @module
 * @author      Reydel Leon Machado
 * @copyright   (c) 2015 Reydel Leon Machado
 * @license     Licensed under MIT license
 */

'use strict';

function route(handle, pathname, response) {
    console.log("Routing the request for " + pathname);
    
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
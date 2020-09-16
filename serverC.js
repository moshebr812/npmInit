// const http = require ('http');

// // Example #1 : return simple text to Client
// http.createServer ( (request, response) => {
//     // request: we can analyze and based on it decide what to do

//     // reposne: what do we returh to client
    
//     //response.writeHead ();
//     response.write ('Data returned from Server C');

//     // the write commands just write locally
//     // only when we arrive to .end() the response is sent to client
//     response.end();
// }).listen(8081);

// Example #2: return html file
const http2 = require ('http');
const filePoint = require ('fs');

http2.createServer ( (request, response) => {

    const myHTMLFile = filePoint.readFileSync ('index2.html', {encoding: "utf-8"});

    // response.writeHead (200, {'Content-type': 'text/plain'});
    // response.write ('Test plain text from Server .....');
    
    response.writeHead (200, {'Content-type': 'text/html'});
    response.write ( myHTMLFile );
    response.end();
}).listen(8080);


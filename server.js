var http=require("http")
var url=require("url")

function server(router){
  http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log(pathname+"---url")
    router(pathname)
    response.writeHead(200,{"Content-Type":"text/plain"})
    response.end("hellow world")
  }).listen(65535)
}

module.exports.server=server
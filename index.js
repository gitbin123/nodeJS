var ite=require("./模块")


var router=require("./router")
var server=require("./server") 
// console.log( __filename )
server.server(router.router)
// var a=new ite()
// console.log(a.name())

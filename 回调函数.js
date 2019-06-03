var fs=require("fs")




// 执行阻塞
// var data=fs.readFileSync("1.txt")

// console.log(data.toString())
// console.log("程序执行结束")



// 执行不阻塞
var data=fs.readFile("1.txt",function(err,data){
  if(err){}else{
    console.log(data.toString())
  }
})

console.log(data)
console.log("程序执行结束")
//parallel read conetnts of f1 f2 and f3 using promisified function

const fs = require("fs")

let f1kapromise= fs.promises.readFile("./f1.txt")
f1kapromise.then(function(data){
    console.log(data + "")
})
let f2kapromise= fs.promises.readFile("./f2.txt")
f2kapromise.then(function(data){
    console.log(data + "")
})
let f3kapromise= fs.promises.readFile("./f3.txt")
f3kapromise.then(function(data){
    console.log(data + "")
})
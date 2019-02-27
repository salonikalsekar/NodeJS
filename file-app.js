const fs = require('fs')
fs.writeFileSync("hello.txt", "testing the app")

fs.readFileSync("/hello.txt", readingData)
console.log(readingData)
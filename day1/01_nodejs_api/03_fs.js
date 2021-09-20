const fs = require('fs')
// const fs = require('fs').promises

fs.readFile('../../README.md',(err, data)=>{
    if (err) throw err;
    console.log(data.toString())
})

// const fs_pro = require('fs').promises
const {promisify} = require('util') 

(async ()=> {
    const fs = require('fs')
    const {promisify} = require('fs')
    const readFile = promisify(fs.readFile)
    const data = await readFile('../../README.md')
    console.log(data.toString())

})()
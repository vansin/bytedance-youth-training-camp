const fs = require('fs')


const rs = fs.createReadStream('./1.png')
const ws = fs.createReadStream('./2.png')

rs.pipe(ws)
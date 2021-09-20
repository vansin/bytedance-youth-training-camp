#!/usr/bin/env node
const program = require('commander')
// 策略模式

program.version(require('../package').version)
program.command('init <name>')
        .description('init project')
        // .action(name=>{
        //     console.log('init'+name)
        // })
        .action(require('../lib/init'))


// program.command('init <name>')
//         .description('init project')
//         // .action(name=>{
//         //     console.log('init'+name)
//         // })
//         .action(require('../lib/init'))


program.parse(process.argv)

// console.log(process.argv)
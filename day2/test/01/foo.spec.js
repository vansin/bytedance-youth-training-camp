const { jest } = require('@jest/globals')
const foo = require('./foo')

jest.mock("./bar.js", ()=>{
    return jest.fn()
})

test("full", ()=>{
    ex
})
const { expect } = require('@jest/globals')
const add = require('./add')

test("1+1=2", ()=>{
    let a = 1
    let b = 1
    expect(add(a,b)).toBe(2);
})
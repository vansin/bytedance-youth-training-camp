// const { test } = require("picomatch")
const { expect } = require("@jest/globals")
const User = require("./user")

test("should getName", ()=>{
    const user= new User("xiaohong")
    user.setName("xiaohei")
    expect(user.getName()).toBe("xiaohei")
})
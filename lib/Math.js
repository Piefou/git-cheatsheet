const add = (a, b) => a + b
const min = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => {if(b!==0) return (a / b); else throw 'Can\'t divide by 0'}

module.exports = {add,min,mul,div}
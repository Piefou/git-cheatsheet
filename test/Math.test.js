const Math = require('../lib/Math')

test('adds 5 and 6 to equal 11', () => {
    expect(Math.add(5, 6)).toBe(11)
})

test('multiply 5 by 3 to equal 15', () => {
    expect(Math.mul(5, 3)).toBe(15)
})

test('divide 5 by 2 to equals 2.5', () => {
    expect(Math.div(5, 2)).toEqual(2.5)
})

test('divide 2 by 0 to throw error', () => {
    expect(() => Math.div(2, 0)).toThrow('Can\'t divide by 0')
})
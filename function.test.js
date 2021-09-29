const {sum, subtraction, multiplication, distribution, arrLength, checkString, checkNumber, checkOddNumber, checkEvenNumber, checkPalindrome} = require('./function');

test('sum ', () => {
  expect(sum(5, 2)).toBe(7);
});

test('subtraction ', () => {
  expect(subtraction(10, 5)).toBe(5);
});

test('multiplication ', () => {
    expect(multiplication(5, 5)).toBe(25)
})

test('distribution ', () => {
    expect(distribution(10, 2)).toBe(5)
})

test('array length', () => {
    expect(arrLength([1,2,3,4,5,6,7,8,9])).toBe(9)
})

test('string check', () => {
  expect(checkString('1')).toBeTruthy()
  expect(checkString(1)).toBeFalsy()
})

test('number check', () => {
  expect(checkNumber(1)).toBeTruthy()
  expect(checkNumber('1')).toBeFalsy()
})

test('chekc odd numbers', () => {
  expect(checkOddNumber(1)).toBeTruthy()
  expect(checkOddNumber(2)).toBeFalsy()
})

test('check even number', () => {
  expect(checkEvenNumber(2)).toBeTruthy()
  expect(checkEvenNumber(1)).toBeFalsy()
})

test('palindrome test', () => {
  expect(checkPalindrome('malam')).toBeTruthy()
  expect(checkPalindrome('malammmm')).toBeFalsy()
})



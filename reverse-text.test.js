const reverseText = require('./reverse-text');

test('reverse null', () => {
    expect(reverseText(null)).toBe(null);
});

test('reverse empty', () => {
    expect(reverseText("")).toBe("");
});

test('reverse hello world', () => {
    expect(reverseText("hello world")).toBe("dlrow olleh");
});

test('reverse number 1234', () => {
    expect(reverseText(1234)).toBe(4321);
});

test('reverse number 1000', () => {
    expect(reverseText(1000)).toBe(1);
});
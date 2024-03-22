


function reverseText(input) {
  if (input === null) return null;

  let text = "";

  if (typeof input !== 'string') {
    text = input.toString();
  } else {
    text = input;
  }

  let reversedText = text.split('').reverse().join('')

  if (typeof input === 'number') {
    return parseInt(reversedText);
  }

  return reversedText;
}


module.exports = reverseText;


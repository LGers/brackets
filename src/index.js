const check = (str, bracketsConfig) => {
  console.log('------------------------------------------')
  console.log('str', str);
  // console.log('bracketsConfig', bracketsConfig);
  let closeBracketsObj = {};
  bracketsConfig.forEach((el) => {
    closeBracketsObj[el[1]] = el[0];
  });
  console.log('brObj', closeBracketsObj);
  // console.log('111w')
  let stack = [];
  // console.log('stack[0]', stack[0]);
  [...str].forEach((bracket) => {
    console.log('bracket = ', bracket);
    console.log('last stack el =', stack[stack.length - 1]);
    console.log('closeBracketsObj[bracket] =', closeBracketsObj[bracket]);
    console.log('Object.values(closeBracketsObj).includes(bracket) =', Object.keys(closeBracketsObj));
    // if (!stack[stack.length - 1] || !brObj[bracket] || stack[stack.length - 1] === brObj[bracket]) {stack.push(bracket)}
    // else {stack.pop()}
    const isCloseBracket = Object.keys(closeBracketsObj).includes(bracket);
    console.log('isCloseBracket = ', isCloseBracket);
    if (isCloseBracket && closeBracketsObj[bracket] === stack[stack.length - 1]) {
      console.log('pop bracket', bracket);
      stack.pop();
    } else {
      console.log('push bracket', bracket);
      stack.push(bracket);
    }
    console.log('stack', stack, '----------------');
  });
  console.log(stack);
  return !stack.length;
};

// check('ddd', 'ddd')
module.exports = function check(str, bracketsConfig) {
  let closeBracketsObj = {};
  bracketsConfig.forEach((el) => {
    closeBracketsObj[el[1]] = el[0];
  });
  let stack = [];
  [...str].forEach((bracket) => {
    const isCloseBracket = Object.keys(closeBracketsObj).includes(bracket);
    if (isCloseBracket && closeBracketsObj[bracket] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  });
  return !stack.length;
}

const bracketsConfig = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6'],
  ['7', '7'],
  ['8', '8']
];
const str = '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222';

// check(str, bracketsConfig);

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

let str1 = '()';
str1 = '())(';
str1 = '([{}])';
str1 = '[(])';
str1 = '|(|)';
check(str1, config5);

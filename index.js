const height = require('height');
let a = 5;
let b = 5;

if(a > b){
    console.log(a);
}else if (a < b){
    console.log(b);
}else{
    console.log('a = b')
}

let x = 'six';
let y = 6;

if(x = y){
    console.log(x , y)
}

const c = { isHavingFun : true }
const d = { isHavingFun : true }
console.log(c == d);
console.log(c === d);

const e = { isHavingFun : true}
const f = e;
console.log(e === f)

const str = 0
if (str){
    console.log('not empty')
}else {
    console.log('empty')
}

const person = 'Jane';
switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
  default:
    console.log('Hi');
    break;
}

const foo = -1;
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('I like this number');
    break;
  case -1:
  case -2:
    console.log('I love this number');
    break;
  default:
    console.log('I don\'t like this number.');
}

const goo = 0;
let output = '';
switch (goo) {
  case 0:
    output += 'where ';
  case 1:
    output += 'are ';
    output += ' you ';
  case 2:
    output += 'from ';
  case 3:
    output += '!!';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}


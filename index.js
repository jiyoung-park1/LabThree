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
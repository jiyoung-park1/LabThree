var x = 47;
var y;

if (x >= 85) {
  console.log("A+");
  y = 1;
} else if ( x >= 80){
  console.log("A");
  y = 1;
} else if( x >= 75){
  console.log("A-");
  y = 1;
} else if (x >= 70){
  console.log("B+");
  y = 2;
} else if (x >= 65){
  console.log("B");
  y = 2;
} else if(x >= 60){
  console.log("B-");
  y = 2;
} else if (x >= 55){;
  console.log("C+");
  y = 3;
} else if (x >= 50){
  console.log("C");
  y = 3;
} else if (x >= 40){
  console.log("D");
  y = 4;
} else if(x >= 0){
  console.log("E");
  y = 4;
} else{
   console.log("please write a number from 0 to 100");
}

switch (y) {
  case 1:
    console.log("Pass with Distinction");
    break;
  case 2:
    console.log("Pass with Merit");
    break;
  case 3:
    console.log("Pass");
    break;
  case 4:
    console.log("Fail grades");
    break;
  default:
    console.log("your description")
}
var x = 0;
var y;

if(x > 100){
  console.log("please write a number from 0 to 100");
} else if(x >= 75){
 y = 1;
} else if(x >= 60){
  y = 2;
} else if(x >= 50){
  y = 3;
} else {
  y = 4;
}

switch (y) {
  case 1:
   console.log("Pass with Distinction");
   if( x >= 85){
     console.log("A+");
   } else if(x >= 80){
     console.log("A");
   } else {
     console.log("A-");
   }
   break;

  case 2:
   console.log("Pass with merit");
   if(x >= 70){
     console.log("B+");
   } else if(x >= 65){
     console.log("B");
   }else {
     console.log("B-");
   }
   break;
  
   case 3:
    console.log("Pass");
    if(x >= 55){
      console.log("C+");
    } else{
      console.log("c");
    }
    break;

    case 4:
     console.log("Fail grades");
     if(x >= 40){
       console.log("D");
     } else {
       console.log("E");
     }
     break;

     default:
       console.log("ohohohoho")
}

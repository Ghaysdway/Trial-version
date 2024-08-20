let Note = 65;
if (Note >= 90) {
  console.log("A");
} else if (Note >= 80 && Note <= 89) {
  console.log("B");
} else if (Note >= 70 && Note <= 79) {
  console.log("C");
} else if (Note >= 60 && Note <= 69) {
  console.log("D");
} else if (Note <= 60) {
  console.log("F");
}

let a = 5;
let day;
switch (a) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "wednesdy";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    day = "not result";
}
console.log(day)


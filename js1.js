function loop(){
let string = "";
for (let i = 1; i <= 5; i++) {

  for (let j = 1; j <=5 - i; j++) {
    string += " ";
  }
  for (let k = 1; k <=i; k++) {
    string += "*";
  }
  string += "\n"+"<br>";
 
}
document.write(string);
}

function rendom(){
 document.getElementById("demo").innerHTML = Math.floor(Math.random() * (10-1));
}

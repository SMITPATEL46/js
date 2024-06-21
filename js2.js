const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value + "<br>"; 

}
function sort(){
    const numbers = [45, 4, 9, 16, 25];
    document.getElementById("demo").innerHTML = txt;
     
}
function date(){
const d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();
}
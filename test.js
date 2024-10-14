
function myFunction(){
let x = document.getElementById("cel").value;
  if (x === ""){
document.getElementById("result").innerHTML ="Enter a number";
}
  else{
let y = (x * (9/5)) + 32;
const c = "Temperature in fahrenheit is:"
document.getElementById("result").innerHTML = c + "   " + "  " + y;
}
}

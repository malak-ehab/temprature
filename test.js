
function myFunction(){
let x = document.getElementById("cel").value;
let y = (x * (9/5)) + 32;
const c = "Temperature in fahrenheit is:"
document.getElementById("result").innerHTML = c + "   " + "  " + y;
}
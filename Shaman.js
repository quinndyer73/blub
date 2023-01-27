function myFunction(x) {
    x.classList.toggle("change");
  }


function clickCounter() {
if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
    localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =  localStorage.clickcount + " pets";
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
}
}
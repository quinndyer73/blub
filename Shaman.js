function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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
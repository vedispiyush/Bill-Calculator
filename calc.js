let bill;
let p = 0;
document.getElementById("input").addEventListener("keyup", function () {
  bill = this.value;
  console.log(bill);
});

let ans=0;
let tip_amount = document.querySelectorAll('#one');

tip_amount.forEach(function (item) {
  item.addEventListener('click', function () {
    ans = parseInt(this.getAttribute("value"));
    document.getElementById("rone2").innerHTML = (bill * ans) / 100;
  });
});

function myFunction() {
  p += 1;
  document.getElementById("zero").innerText = p;
}
function fun() {
  if (p <= 0) {
    alert("count is already zero");
  }
  else {
    p = p - 1;
    document.getElementById("zero").innerText = p;
  }
}



function total_amount() {
  let sum = parseInt(bill) + parseInt((bill * ans) / 100);
  document.getElementById("rtwo2").innerHTML = sum;
}
function reset(){
  document.getElementById("zero").innerHTML=0;
  document.getElementById("rone2").innerHTML=0;
  document.getElementById("rtwo2").innerHTML=0;
  document.getElementById("input").value=0;
}


let requestURL = "https://economia.awesomeapi.com.br/all/USD-BRL";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  let dolarObj = request.response;
  dolarValue = dolarObj.USD.bid;
  document.getElementById("resultado").innerHTML = `1 dolar = ${Number(
    dolarValue
  ).toFixed(2)} reais`;
};

function getDolarValue(dolarObj) {
  let dolarValue = dolarObj.USD.bid;
  return dolarValue;
}

function changeValue() {
  var dolarObj = request.response;
  dolarValue = getDolarValue(dolarObj);
  let userDolar = document.querySelector("input#inputdolar").value;
  let real = userDolar * dolarValue;
  document.getElementById("resultado").innerHTML =
    "O valor em reais é R$ " + real.toFixed(2);
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    changeValue();
  }
});

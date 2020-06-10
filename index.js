let requestURL = "https://economia.awesomeapi.com.br/all/USD-BRL";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var dolar = request.response;
  getDolarValue(dolar);
  console.log(dolar);
};

function getDolarValue(dolar) {
  let dolarValue = dolar.USD.bid;
  let userDolar = document.querySelector("input#dolar").value;
  let real = userDolar * dolarValue;

  document.getElementById("resultado").innerHTML =
    "O valor em reais é R$ " + real;
}

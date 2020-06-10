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
}

let userDolar = document.getElementById(dolar).;
console.log(userDolar);

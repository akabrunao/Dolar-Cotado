let requestURL = "https://economia.awesomeapi.com.br/all/USD-BRL";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
try {
  request.send();
} catch {
  window.alert("Erro: Não foi possível obter a otação do dolar no momento")
}

function getDolarValue(dolarObj) {
  let dolarValue = dolarObj.USD.bid;
  return dolarValue;
}

// Mostra valor do dolar ao carregar página
request.onload = function () {
  let dolarObj = request.response;
  dolarValue = getDolarValue(dolarObj);
  document.getElementById("resultado").innerHTML = `1 dolar = ${Number(dolarValue).toFixed(2)} reais`;
};

function changeValue() {
  let selectMoeda = document.querySelector("#selectMoeda");
  if (selectMoeda.value == "US$") {
    let dolarObj = request.response;
    dolarValue = getDolarValue(dolarObj);

    let userDolar = document.querySelector("input#inputdolar").value;

    let real = userDolar * dolarValue;

    document.getElementById("resultado").innerHTML = "O valor em reais é R$ " + real.toFixed(2);

  } else if (selectMoeda.value == "R$") {
    let dolarObj = request.response;
    dolarValue = getDolarValue(dolarObj);

    let userReal = document.querySelector("input#inputdolar").value;

    let real = userReal / dolarValue;

    document.getElementById("resultado").innerHTML = "O valor em dolar é US$ " + real.toFixed(2);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    changeValue();
  }
});

function converter() {
    var valorTemperatura = document.getElementById("valorTemperatura").value;
    var unidade = document.getElementById("unidade").value;
    var resultado = document.getElementById("resultado");

    if (valorTemperatura === "") {
        resultado.textContent = "Por favor, insira um valor.";
        return;
    }

    // Converte de Fahrenheit para Celsius ou vice-versa
    if (unidade === "FahrenheitToCelsius") {
        var celsius = (valorTemperatura - 32) * 5 / 9;
        resultado.textContent = valorTemperatura + "°F é igual a " + celsius.toFixed(2) + "°C";
    } else if (unidade === "CelsiusToFahrenheit") {
        var fahrenheit = (valorTemperatura * 9 / 5) + 32;
        resultado.textContent = valorTemperatura + "°C é igual a " + fahrenheit.toFixed(2) + "°F";
    }
}

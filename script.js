const input1Tarjeta = document.getElementById("nombre");
const input2Tarjeta = document.getElementById("tarjeta2");
const input3Tarjeta = document.getElementById("numeroTarjeta");
const input4Tarjeta = document.getElementById("tarjeta");
const input5Tarjeta = document.getElementById("first");
const input6Tarjeta = document.getElementById("second");
const input7Tarjeta = document.getElementById("third");
const input8Tarjeta = document.getElementById("tarjeta3");
const input9Tarjeta = document.getElementById("tarjeta5");
const input10Tarjeta = document.getElementById("tarjeta6");

input1Tarjeta.addEventListener("input", function () {
  input2Tarjeta.value = input1Tarjeta.value;
});

input3Tarjeta.addEventListener("input", function () {
  input4Tarjeta.value = input3Tarjeta.value;
});

input5Tarjeta.addEventListener("input", function () {
  input9Tarjeta.value = input5Tarjeta.value;
});

input6Tarjeta.addEventListener("input", function () {
  input8Tarjeta.value = input6Tarjeta.value;
});

input7Tarjeta.addEventListener("input", function () {
  input10Tarjeta.value = input7Tarjeta.value;
});

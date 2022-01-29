import cipher from './cipher.js';

const form = document.forms[0];

const resultadoTexto = document.getElementById('resultadoTexto');

document.querySelector('#clickMe').addEventListener('click', function() {
  event.preventDefault();

  const select = document.querySelector('#escolha').value;

  const desloc = document.querySelector('#offset').value;

  const text = document.querySelector('#meuTexto').value;

  console.log(select, desloc, text);

  resultadoTexto.innerHTML = cipher.encode(form.offset.value, form.meuTexto.value);

}, false);


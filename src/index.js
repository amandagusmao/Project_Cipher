import cipher from './cipher.js';

const form = document.forms[0];



document.querySelector('#clickMe').addEventListener('click', function() {
  event.preventDefault();

  const resultadoTexto = document.getElementById('resultadoTexto');

  const select = document.querySelector('#escolha').value;

  try {
    if (select === "cifra") {
      resultadoTexto.value = cipher.encode(Number(form.offset.value), form.meuTexto.value);
    }else {
      resultadoTexto.value = cipher.decode(Number(form.offset.value), form.meuTexto.value);
    }
  }catch(e) {
    alert(e.message);
  }

}, false);

document.querySelector('#whats').addEventListener('click', function() {
  event.preventDefault();
  const text = encodeURIComponent(document.querySelector('#meuTexto').value);
  const offset = encodeURIComponent(document.querySelector('#offset').value);
  const result = encodeURIComponent(document.querySelector('#resultadoTexto').value);
  const num = document.querySelector('#tel').value;
  const whatsUrl = `https://api.whatsapp.com/send?phone=${num}&text=Seu%20texto%20inserido%3A%20${text}%2C%20com%20offset%20${offset}%2C%20retornou%3A%20${result}`;

  window.open(whatsUrl, '_blank').focus();
}, false);
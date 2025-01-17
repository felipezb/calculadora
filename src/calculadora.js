function soma() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 + num2;
    alert(`Resultado da soma: ${resultado}`); // Exibe o resultado em uma mensagem pop-up
  }
  
  function subtrai() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 - num2;
    alert(`Resultado da subtração: ${resultado}`); // Exibe o resultado em uma mensagem pop-up
  }
  
  function multiplica() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 * num2;
    alert(`Resultado da multiplicação: ${resultado}`); // Exibe o resultado em uma mensagem pop-up
  }

  function dividi() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 / num2;
    alert(`Resultado da divisão: ${resultado}`); // Exibe o resultado em uma mensagem pop-up
  }
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Isso evita a recarga da página

    const capital = parseFloat(document.getElementById('capitalInicial').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100;
    const periodo = document.getElementById('periodo').value;
    const tempo = parseFloat(document.getElementById('tempo').value);
    let i = 0;

    if (periodo === "a") {
      i = tempo / 12;
    } else if (periodo === "m") {
      i = tempo;
    }

    const resultadoCalculado = capital * Math.pow(1 + juros, i);
    document.getElementById('resultado').textContent = `O valor final com juros compostos é: ${resultadoCalculado.toFixed(2)}`;
  });
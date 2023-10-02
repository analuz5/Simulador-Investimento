document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Isso evita a recarga da página
  // Obtenção dos valores dos campos do formulário
    const capital = parseFloat(document.getElementById('capitalInicial').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100;
    const periodo = document.getElementById('periodo').value;
    const tempo = parseFloat(document.getElementById('tempo').value);
    let i = 0;
 // Cálculo da taxa de juros com base no período selecionado
    if (periodo === "a") {
      i = tempo / 12; //Converte anos para meses
    } else if (periodo === "m") {
      i = tempo;// Mantém o tempo em meses
    }
 
    const resultadoCalculado = capital * Math.pow(1 + juros, i);// Cálculo do valor final com juros compostos

    document.getElementById('resultado').textContent = `O valor final com juros compostos é: ${resultadoCalculado.toFixed(2)}`;
  });  // Exibição do resultado no elemento com o ID 'resultado'
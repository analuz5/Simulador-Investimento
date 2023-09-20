async function obtemResultado(c, j, t, p,resultado){
    const c = document.getElementById('capital')
    const j = document.getElementById('juros')
    const p = document.getElementById('periodo')
    const t = document.getElementById('tempo')

    j = j / 100

    if p == "a" {
        i = a * 12
    }

    resultado = c * (1+j)^2

    resultado.textContent = `O valor de com o juros composto é ${resultado}`
}
function recuperarText(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;

    return valor;
}

function recuperarFloat(idComponente) {
    let valorTexto = recuperarText(idComponente);
    let valorFloat = parseFloat(valorTexto);

    return valorFloat;
} 
const controle =  document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")

controle.forEach((elemento) => {
   elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
   })
})

function manipulaDados(operacao,controle){
    const peca = controle.querySelector('[data-contador]');

    if(operacao === "-"){
        peca.value =  parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}   

function  atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}
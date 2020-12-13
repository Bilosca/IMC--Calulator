/* PEGA OS VALORES DO FORMULARIO E 
   RETORNA O IMC */
function GetValues(opcao='imc'){
    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value

    altura = parseFloat(altura)
    peso = parseFloat(peso)

    var imc = peso / altura ** 2
    imc = Math.round(imc*100)/100

    if(opcao == 'nome'){
        return nome

    }else{
        return imc
    }  
}

/* CRIA O ELEMENTO P E ADICIONA NA DIV */
function RevelaResultado(texto){
    var paragrafo = document.createElement('p')
    paragrafo.innerText = texto
    document.getElementById("div-resultado").appendChild(paragrafo)
}

// PEGA O VALOR DO NOME E IMC E REVELA USANDO A FUNCAO
// RevelaResultado() DE ACORDO COM O IMC DA PESSOA
function Resultado(){
    var nome = GetValues('nome')
    var imc = GetValues()

    if (imc < 18.5){
        document.getElementById('p-resultado').innerHTML = (nome + ' Seu resultado é ' + imc)
        RevelaResultado('Abaixo do Peso')
    }
    else if(imc >= 18.5 && imc <= 24.9){
        document.getElementById('p-resultado').innerHTML = (nome + ' Seu resultado é ' + imc)
        RevelaResultado("Peso normal")
    }
    else if(imc >= 25 && imc <= 29.9){
        document.getElementById('p-resultado').innerHTML = (nome + ' Seu resultado é ' + imc)
        RevelaResultado("Sobrepeso")
    }
    else if(imc >= 30 && imc <= 34.9){
        document.getElementById('p-resultado').innerHTML = (nome + ' Seu resultado é ' + imc)
        RevelaResultado("Obeso I")
    }
    else if(imc >= 35){
        document.getElementById('p-resultado').innerHTML = (nome + ' Seu resultado é ' + imc)
        RevelaResultado("Obeso II")
    }

}

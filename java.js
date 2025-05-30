
let resultadoMostrado = false;

function butao(valor){

    let input = document.querySelector("#text")

    if(resultadoMostrado){
        input.value = '';
        resultadoMostrado = false;
    }

    input.value += valor
}

function calcular(){

    let input = document.querySelector("#text")

    let expressaoOriginal = input.value;


    

    try{


        let expressaoConvertida = expressaoOriginal.replace(/(\d{1,3}(\.\d{3})*),\d{2}/g, match => {
            return match.replace(/\./g, '').replace(',', '.');
        });



        let resultado = math.evaluate(expressaoConvertida);

        input.value = resultado.toLocaleString('pt-br',{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) ;
        resultadoMostrado = true;
    } catch(erro){
        input.value = 'Erro';

        console.error("Erro na expressão:" , erro);
        resultadoMostrado = true;
    }

    
}

function clean(){

     document.querySelector('#text').value = ''
}
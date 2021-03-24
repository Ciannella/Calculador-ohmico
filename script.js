

function cauculoCorrente(){
    let tension = document.getElementById('txtt')
    let resist = document.getElementById('txtr')
    let res = document.getElementById('res')
     //teste para erro de dados vazios 
    if(tension.value.length == '' || resist.value.length == ''){
        window.alert('Adicione algum valor')
    }else{
        let t = Number(tension.value)
        let r = Number(resist.value)
        let result = t / r
        res.innerHTML = ` A corrente é de ${result.toFixed(2).replace('.', ',')}A`
        

    }
}

// função para  cálcular a resistencia

function cauculores(){
    let tens = document.getElementById('txten')
    let corrente = document.getElementById('txco')
    let ress = document.getElementById('ress')
    
    // teste para erro de dados vazios 
    if (tens.value.length == '' || corrente.value.length == ''){
        window.alert('Adicione algum valor ')

    }else {
        let ten = Number(tens.value)
        let c = Number(corrente.value)
        let resultado = ten / c
        ress.innerHTML = `A resistencia é de ${resultado.toFixed(2).replace('.',',')}Ω`
    }
    
}



//função para cáucular a tensão elétrica

function cauculoten(){
   let corrent = document.getElementById('corr')
   let resis = document.getElementById('resist')
   let R = document.getElementById('R')

   if(corrent.value.length == ''|| resis.value.length == ''){
       window.alert('Adicione algum valor')
   } else {

       let c = Number(corrent.value)
       let rr = Number(resis.value)
       let concl = rr * c
       R.innerHTML = `A DDP(Tensão) é de ${concl.toFixed(2).replace('.',',')}V`
   }

}




function conversor(){
    
}
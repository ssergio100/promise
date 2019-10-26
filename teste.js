function fazRequisicao() {
   return new Promise((resolve, reject) => {
        let soma = 2 + 2
        setTimeout(() => {
            reject(soma);
        }, 5000);
    });
}

fazRequisicao()
    .then( function(data){
            console.log(data)
    }).catch(function(data){

        console.log('erro '+data)
    })
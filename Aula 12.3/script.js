function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
        gênero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
        img.setAttribute('src', 'menino.png24')
        } else if(idade < 30){
            //jovem
        img.setAttribute('src', 'moço.png24')
        } else if(idade < 70){
            //adulto
        img.setAttribute('src', 'adulto.png24')
        }
        else{
            //idoso
        img.setAttribute('src', 'idoso.png24')
        }
    } else if(fsex[1].checked) {
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
        img.setAttribute('src', 'menina.png24')
        } else if(idade < 30){
            //jovem
        img.setAttribute('src', 'moça.png24')
        
        } else if(idade < 70){
            //adulto
        img.setAttribute('src', 'adulta.png24')
        } else{
            //idoso
        img.setAttribute('src', 'idosa.png24')
        }
    }
    res.style.textAlign ='center'
    res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
}

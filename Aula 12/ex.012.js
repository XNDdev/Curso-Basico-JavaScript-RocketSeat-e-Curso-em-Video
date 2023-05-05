var hora = new Date().getHours();
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 0 && hora < 12){
    console.log('Bom dia!')
} else if(hora >= 12 && hora < 17.59){
    console.log('Boa tarde!')
} else {console.log('Boa noite!')

}
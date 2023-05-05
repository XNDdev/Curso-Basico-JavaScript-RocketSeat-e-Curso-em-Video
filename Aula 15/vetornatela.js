let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
valores.sort()

/* maneira burra
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])*/
/*
for(let pos =[0]; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}*/
//codigo tradicional de percurso em vetores


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//codigo simplificado de percurso em vetores


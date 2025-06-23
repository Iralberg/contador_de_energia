function somar(){

    let pot=document.getElementById('pot')
    let horas=document.getElementById('horas')
    let custo=document.getElementById('custo')
    let res=document.getElementById('res')
    let p=Number(pot.value)
    let h=Number(horas.value)
    let c=Number(custo.value)
    let soma= (p*h*c)/1000
    res.innerHTML=`<p>o consumo da sua energia é ${p*h}Wh ou ${(p*h)/1000}kWh </p> `
    res.innerHTML+=`<p> o consumo da sua energia é R$${soma}</p>`
}

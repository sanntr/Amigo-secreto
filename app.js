// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos =[]; 
let listaIndex=[];
let  indexValo=0;
const listaNumeros=[0,1,2,4,5,6,7,8,9];// Lista de numeros para validar

function asignarTextoElemento(elemento, texto){
    let etiqueta= document.querySelector(elemento)
    etiqueta.innerHTML=texto
};


function agregarAmigo(){
    //Estable la entrada de dato en minuscula y elimina los espacios vacios
    datoEntrada= document.getElementById('amigo').value.toLowerCase().trim();

    //validacion por consola
    // console.log(listaAmigos.includes(datoEntrada));

    //aseguutarses de que el string no sea numeros
    for(i of datoEntrada){
        // console.log(i)
        if(i in listaNumeros ){
            return alert("Ingrese un nombre valido");
        }
    }

    if  (datoEntrada=='' || datoEntrada.length<3)    {   
        alert("Ingrese un nombre valido");
    }else{
        if  (listaAmigos.includes(datoEntrada)){
            alert("El nombre ingresado ya existe");
        }else   {
            asignarTextoElemento('#descripcion', "");
            listaAmigos.push(` ${datoEntrada}`);
            asignarTextoElemento('#listaAmigos',listaAmigos)
    
    }
    //se limpia el input y muestra la lista de amigos
    document.querySelector('#amigo').value=''
  
    // console.log(listaAmigos);
}}


function sortearAmigo(){
    indexValor=Math.floor(Math.random()*listaAmigos.length);
    //valida que todos los nombres se sortearon 
    asignarTextoElemento('#listaAmigos',"")
    if  (listaIndex.length===listaAmigos.length)    {
        document.getElementById('amigos').setAttribute("style", "color: rgb(255,0, 0);");
        asignarTextoElemento('#amigos', "Todos los nombres fueron sorteados");
    }else   {
        //valida que el valor aleatorio seleccionado se haya seleccionado previamente
        if (listaIndex.includes(indexValor))    {
                sortearAmigo();
        }else   {
                listaIndex.push(indexValor);
                
                document.getElementById('amigos').setAttribute("style", "color: rgb(0, 255, 0);");
                asignarTextoElemento('#amigos', `El amigo secreto sorteado es: ${listaAmigos[indexValor]}`);
            }
    }
}

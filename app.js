// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos =[]; 
let listaIndex=[];

function asignarTextoElemento(elemento, texto){
    let etiqueta= document.querySelector(elemento)
    etiqueta.innerHTML=texto
};


function agregarAmigo(){
    //Estable la entrada de dato en minuscula y elimina los espacios vacios
    datoEntrada= document.getElementById('amigo').value.toLowerCase().trim();

    //validacion por consola
    console.log(listaAmigos.includes(datoEntrada));
    
    if  (datoEntrada=='' )    {    
        asignarTextoElemento('#descripcion', "Ingrese un nombre");
    }else{
        if  (listaAmigos.includes(datoEntrada)){
            asignarTextoElemento('#descripcion', "El nombre ingresado ya existe");
        }else   {
            asignarTextoElemento('#descripcion', "");
            listaAmigos.push(datoEntrada);
        }
    }
    //se limpia el input y muestra la lista de amigos
    document.querySelector('#amigo').value=''
    asignarTextoElemento('#listaAmigos', listaAmigos);

    console.log(listaAmigos);
}


function sortearAmigo(){

    let  indexValor=Math.floor(Math.random()*listaAmigos.length);
    
    //valida que todos los nombres se sortearon 
    if  (listaIndex.length===listaAmigos.length)    {
        asignarTextoElemento('h2', "Todos los nombres fueron sorteados");
    }else   {
        //valida que el valor aleatorio seleccionado se haya seleccionado previamente
        if (listaIndex.includes(indexValor))    {
                sortearAmigo();
        }else   {
                listaIndex.push(indexValor);
                asignarTextoElemento('h2', listaAmigos[indexValor]);
            }
    }
}


//pasos para configurar un  cliente con js puro de un api rest
// pasos para consumir un api rest utilizando js

//1. conocer la url(endpoint) del API y almacenarla en una variable
let url = "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC/top-tracks?market=US";

//1.1 definir variables auxiliares del mensaje si es necesario 

let token = "Bearer BQBYhe9Ic2yCCVWRPfAepILkKY3wig2u7ShBqC0luCR6EOHrAK4ZfqeAgtNuQwnp-nV2xwx7aNPo9bOlXaHW5JSr7du7wv4cQCHuUyu_DyLIDVEI_tWxih405SqUyPUnb9ifM6XtkVUedt14v9nBgGbb7oKZV1E";

//2. configurar los parametros de envio 
// objeto de js que almacene metodoHTTP, headers y body

 /*let parametros={
    nombre:"pedro",
    apellido: "coral",
    edad:"45",
    apodo:"el escamoso",
    novias: {novia1="dra paula",novia2="mayerli",novia3="doña nidia"}
}

console.log(parametros);
console.log(parametros.nombe);
console.log(parametros.novias.novia2); 
*/

let parametros = {
    method:"GET",
    headers:{Authorization: token}
}
console.log(parametros);
//3. establecer la comunicación con el API utilizando el metodo fetch()
fetch(url,parametros)
.then(respuesta => respuesta.json())
.then (datos=>console.log(datos));

//4.declarar la función depurarDatos
function depurarDatos(datos){
    console.log(datos);
    

    let titulo =document.getElementById("titulo");
    let imagen = document.getElementById("imagen");
    let audio = document.getElementById("audio");

    titulo.textContent=datos.tracks[1].name;
    imagen.src=datos.tracks[1].album.images[0].url;
    Audio.src=datos.tracks[1].preview_url;

}
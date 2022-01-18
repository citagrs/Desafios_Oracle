function encriptar(texto){
    var cadena = [];
    for(var i = 0 ; i <= texto.length-1 ; i++){
        if (texto[i]==="a"){
            cadena.push("ai");
        }else if(texto[i]==="e"){
            cadena.push("enter");
        }else if(texto[i]==="i"){
            cadena.push("imes");
        }else if(texto[i]==="o"){
            cadena.push("ober");
        }else if(texto[i]==="u"){
            cadena.push("ufat");
        }else{
            cadena.push(texto[i]);
        }
    }
    var textoEncriptado = cadena.toString().replace(/,/g,"");
    return textoEncriptado;
}

function desencriptar(texto){

    var textoDesencriptado = [];
    var contador = 0;
    while(contador<=texto.length-1){
        if (texto[contador]==="a" && texto[contador+1]==="i"){
            textoDesencriptado.push("a");
            contador=contador+2;
        }else if(texto[contador]==="e" && texto[contador+1]==="n" && texto[contador+2]==="t" && texto[contador+3]==="e" && texto[contador+4]==="r"){
            textoDesencriptado.push("e");
            contador=contador+5;
        }else if(texto[contador]==="i" && texto[contador+1]==="m" && texto[contador+2]==="e" && texto[contador+3]==="s"){
            textoDesencriptado.push("i");
            contador=contador+4;
        }else if(texto[contador]==="o" && texto[contador+1]==="b" && texto[contador+2]==="e" && texto[contador+3]==="r"){
            textoDesencriptado.push("o");
            contador=contador+4;
        }else if(texto[contador]==="u" && texto[contador+1]==="f" && texto[contador+2]==="a" && texto[contador+3]==="t"){
            textoDesencriptado.push("u");
            contador=contador+4;
        }else{
            textoDesencriptado.push(texto[contador]);
            contador++;
        }
    }
    var cadenaDesencriptada = textoDesencriptado.toString().replace(/,/g,"");
    return cadenaDesencriptada;
}
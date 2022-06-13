function imprimeLista(){
    let sizeLista = listaCompra.length;
    let i=0;

    for ( i ; i<sizeLista ; i++) {
        console.log(listaCompra[i]);
    }   
}

function addTituloH1(){
    let newH1 = document.createElement("h1");
    let newText = document.createTextNode("Soy el nuevo H1");
    let nodo = document.getElementById("Ejercicio2");

    newH1.appendChild(newText);
    nodo.appendChild(newH1);
}

function creaCirculo(){
    document.getElementById("cuadrado").style.backgroundColor= "green";
    document.getElementById("cuadrado").style.borderRadius= "100%";
}

function tituloDocumento(){
    let texto = document.getElementById("textoEj4").value;

    document.title = texto;
}

function imprimeEnDocumento(){
    let lista = listaCompra;
    let i = 0;
    let listaPrevia = "";

    for (i; i< lista.length; i++){
        listaPrevia = listaPrevia + lista[i] + "<br>"
    }
    document.getElementById("itemLista").innerHTML = listaPrevia;
}

function creaItemP(id,texto){
    let item = document.createElement("p");
    
    item.setAttribute("id",id);
    item.innerHTML = texto;
    return item;
}

function creaItemImg(texto){
    let item = document.createElement("img");
    
    item.setAttribute("src",texto);
    return item;
}

function creaItemCard(objCard){
    let newCard = objCard;
    let currentNode = document.getElementById("card");
    console.log(newCard);

    let item1 = creaItemP("item1",newCard.titulo);
    currentNode.appendChild(item1);
    let item2 = creaItemImg(newCard.imagen);
    currentNode.appendChild(item2);
    let item3 = creaItemP("item3",newCard.pais);
    currentNode.appendChild(item3);
    let item4 = creaItemP("item4",newCard.ano);
    currentNode.appendChild(item4);
    let item5 = creaItemP("item5",newCard.tipo);
    currentNode.appendChild(item5);
    let item6 = creaItemP("item6",newCard.sinopsis);
    currentNode.appendChild(item6);
}



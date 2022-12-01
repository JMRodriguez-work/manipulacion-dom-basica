const h1 = document.querySelector("h1");
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafo');
// const pid = document.querySelector('#pid');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");

// h1.innerHTML = 'Modificando H1 <br> Test'; //Convierte todo a código HTML
// h1.innerText = 'Otra Modificación <br> Test'; //Convierte solo texto
// h1.setAttribute('class', 'title');
// console.log(h1.getAttribute('class'));

// h1.classList.add('title-main'); //Otra manera de agregar una clase
// console.log(h1.getAttribute('class'));
// h1.classList.remove('title'); //Eliminar una clase
// console.log(h1.getAttribute('class'));

/*********************************Crear un elemento HTML e insertarlo en el documento*/
// const img = document.createElement('img');
// img.setAttribute('src', 'https://picfiles.alphacoders.com/463/463703.jpg');
// img.setAttribute('width', '300px');
// img.setAttribute('height', '500px');

// pid.innerText = 'Chainsaw Man IMG';

// /*pid.innerText = ""; RETO ELIMINAR TEXTO DEL PARRAFO*/
// pid.appendChild(img);

/******************************AGREGAR EVENT LISTENER*****************************************/
// boton.addEventListener('click', eventoTest);

// function eventoTest() {
//    const sumaInputs = Number(input1.value) + Number(input2.value);
//    pResult.innerText = `El resultado es: ${sumaInputs}`;
// }

form.addEventListener("submit", sumarInputVarios);

function sumarInputVarios(event) {
    //console.log(event);
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = `El resultado es: ${sumaInputs}`;
}

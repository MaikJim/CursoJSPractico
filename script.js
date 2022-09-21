const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/* Funcion Event OnClick Calcular */

btn.addEventListener('click', calcularInputs);

function calcularInputs(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}


//h1.innerHTML = "Patito <br> Feo"
//h1.innerText = "Patito <br> Feo"
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

//h1.classList.add('verde');
//h1.classList.remove('rojo');
//h1.classList.toggle("rojo");
//h1.classList.contains('verde);

//input.value = "456"

//const img = document.createElement('img');
//img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@x.png');
//console.log(img)

//id.append(img)
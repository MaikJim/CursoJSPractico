const h1 = document.querySelector('h1');
const input = document.querySelector('');

//h1.innerHTML = "Patito <br> Feo"
//h1.innerText = "Patito <br> Feo"
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');

h1.classList.add('verde');
h1.classList.remove('rojo');
//h1.classList.toggle("rojo");
//h1.classList.contains('verde);

//input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@x.png');
console.log(img)

id.append(img)
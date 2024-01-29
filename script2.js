const div = document.querySelector('.container');

const peliculas = [
    {
        nombre: 'Titanic',
        año: '2004',
        desc: 'Un barco que naufraga',
        precio: '12$',
        stock: 0
    },
    {
        nombre: 'Inception',
        año: '2010',
        desc: 'Un thriller que desafía la mente',
        precio: '14$',
        stock: 10
    },
    {
        nombre: 'Redemption',
        año: '1994',
        desc: 'Un relato de esperanza',
        precio: '14$',
        stock: 20
    },
    {
        nombre: 'The Godfather',
        año: '1972',
        desc: 'Una historia de poder y familia',
        precio: '12$',
        stock: 0
    }
];

const [pelicula1, pelicula2, pelicula3, pelicula4] = peliculas; //destestructuramos el array de objetos en objetos individuales

function Tarjetas(peliculas) {
    const { nombre, año, desc, stock, precio } = peliculas; //desestructuramos cada objeto para tener variables
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${año} <br>
            ${desc}</p>
            <a href="#" class=" ${stock > 0 ? "btn btn-primary" : "btn btn-danger disabled"}"> ${precio}</a>
        </div>
    </div>`; //usamos el operador ternario para añadir clases de boostrap
}

div.innerHTML = Tarjetas(pelicula1);
div.innerHTML += Tarjetas(pelicula2);
div.innerHTML += Tarjetas(pelicula3);
div.innerHTML += Tarjetas(pelicula4);

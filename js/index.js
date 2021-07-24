const libros = [{
    titulo: "Cien años de soledad",
    autor:"Gabriel Garcia Marquez",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/100-a%C3%B1os-de-soledad-150x150lifederimagen.jpg"
},{
    titulo: "El señor de las moscas",
    autor:"William Golding",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-se%C3%B1or-de-las-moscaslifederimagen.jpg"
},{
    titulo: "Viaje al centro de la tierra",
    autor:"Julio Verne",
    precio:600,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Viaje-al-centro-de-la-tierra-150x150lifederimagen.jpg"
},
{
    titulo: "Don Quijote de la Mancha",
    autor:"Miguel de Cervantes",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Don-Quijote-de-la-Mancha-150x150lifederimagen.jpg"
},
{
    titulo: "Moby Dick",
    autor:"Herman Melville",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Moby-Dick-150x150lifederimagen.jpg"
},
{
    titulo: "El viejo y el mar",
    autor:"Ernest Hemingway",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-viejo-y-el-mar-150x150lifederimagen.jpg"
},
{
    titulo: "Veinte mil leguas de viaje submarino",
    autor:"Julio Verne",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/veinte-mil-leguaslifederimagen.jpg"
}];


//Tu codigo JS va acá
// DOM Variables
let selectUsuario = document.getElementById('autor');
let divLibro = document.getElementById('libros');

// Filter author based on user's choice
function filtrarAutor(arr, author) {
    // let autorFiltrado = arr.filter((book) => {
    //     return book.autor == author
    // })
    let newArray = []
    // en loop todo se ejecuta varias veces, 
    // variables deben quedar por fuera o si no crea
    // una nueva variable cada vez que recorre el array
    for (let i = 0; i < arr.length; i++) {
            let escritor = arr[i].autor
            if (escritor == author) {
                newArray.push(arr[i]);
            }
    }
    return newArray
}

// Display that author's information
function mostrarFiltrados() {
    let autorSelect = filtrarAutor(libros, selectUsuario.value)
    console.log(autorSelect)
    autorSelect.map((item) => {
            divLibro.innerHTML = `<div class="card">
            <img src="${item.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">${item.precio}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
    })
}






// let autorFiltrado = arreglo.filter(elem => elem.autor === autor)
// return autorFiltrado;




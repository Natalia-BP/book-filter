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
let selectUsuario = document.getElementById('autor');

function filtrarAutor() {
    for (let i = 0; i <= libros.length; i++) {
            let title = libros[i].titulo
            let author = libros[i].autor
            let both = console.log(`${title} ${author}`)
            return both
    }
}

let mostrar = filtrarAutor()

console.dir(libros);
console.log(mostrar);







// let autorFiltrado = arreglo.filter(elem => elem.autor == autor)
// return autorFiltrado;




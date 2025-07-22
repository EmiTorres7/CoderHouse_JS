let librosFiccion = [
  { titulo: "1984", autor: "George Orwell", año: 1949, genero: "Distopía", disponibilidad:true },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, genero: "Realismo mágico",disponibilidad:false },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953, genero: "Ciencia ficción", disponibilidad: true },
  { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", año: 1954, genero: "Fantasía", disponibilidad: false }
];


let librosNoFiccion = [
  { titulo: "Sapiens", autor: "Yuval Noah Harari", año: 2011, genero: "Historia", disponibilidad:true },
  { titulo: "Una breve historia del tiempo", autor: "Stephen Hawking", año: 1988, genero: "Ciencia", disponibilidad:true },
  { titulo: "El gen", autor: "Siddhartha Mukherjee", año: 2016, genero: "Biología", disponibilidad: false },
  { titulo: "Los cuatro acuerdos", autor: "Don Miguel Ruiz", año: 1997, genero: "Autoayuda", disponibilidad:false }
];

let librosInfantiles = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943, edad_recomendada: "8+", disponibilidad:true },
  { titulo: "Donde viven los monstruos", autor: "Maurice Sendak", año: 1963, edad_recomendada: "4+", disponibilidad:true },
  { titulo: "Matilda", autor: "Roald Dahl", año: 1988, edad_recomendada: "9+", disponibilidad:false },
  { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997, edad_recomendada: "10+", disponibilidad:false }
];

let librosAcademicos = [
  { titulo: "Introduction to Algorithms", autor: "Thomas H. Cormen", año: 2009, genero: "Informática", disponibilidad:true },
  { titulo: "The Selfish Gene", autor: "Richard Dawkins", año: 1976, genero: "Biología evolutiva", disponibilidad:true },
  { titulo: "Critique of Pure Reason", autor: "Immanuel Kant", año: 1781, genero: "Filosofía", disponibilidad:true },
  { titulo: "The Structure of Scientific Revolutions", autor: "Thomas S. Kuhn", año: 1962, genero: "Filosofía de la ciencia", disponibilidad:false }
];

let librosLatinoamericanos = [
  { titulo: "Rayuela", autor: "Julio Cortázar", pais: "Argentina", año: 1963, disponibilidad:false },
  { titulo: "Las venas abiertas de América Latina", autor: "Eduardo Galeano", pais: "Uruguay", año: 1955, disponibilidad:true },
  { titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", pais: "Perú", año: 1963, disponibilidad:false },
  { titulo: "La casa de los espíritus", autor: "Isabel Allende", pais: "Chile", año: 1982, disponibilidad:true }
];




function mostrarLibros() {

}

function buscarLibros() {

}

function agregarLibro(titulo, autor){
    return {titulo, autor};
}


function mostrarDetalleLibro(libro) {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`)
}

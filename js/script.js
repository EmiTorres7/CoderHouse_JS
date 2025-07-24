let librosFiccion = [
  { titulo: "1984", autor: "George Orwell", año: 1949, genero: "Distopía", disponibilidad:true, precio: 15000 },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, genero: "Realismo mágico",disponibilidad:false, precio: 24500 },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953, genero: "Ciencia ficción", disponibilidad: true, precio:18000 },
  { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", año: 1954, genero: "Fantasía", disponibilidad: false, precio: 35000 }
];

let librosNoFiccion = [
  { titulo: "Sapiens", autor: "Yuval Noah Harari", año: 2011, genero: "Historia", disponibilidad:true, precio: 38000 },
  { titulo: "Una breve historia del tiempo", autor: "Stephen Hawking", año: 1988, genero: "Ciencia", disponibilidad:true, precio: 42000 },
  { titulo: "El gen", autor: "Siddhartha Mukherjee", año: 2016, genero: "Biología", disponibilidad: false, precio: 54000 },
  { titulo: "Los cuatro acuerdos", autor: "Don Miguel Ruiz", año: 1997, genero: "Autoayuda", disponibilidad:false, precio: 37000 }
];

let librosInfantiles = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943, edad_recomendada: "8+", disponibilidad:true, precio: 8000 },
  { titulo: "Donde viven los monstruos", autor: "Maurice Sendak", año: 1963, edad_recomendada: "4+", disponibilidad:true, precio: 7500 },
  { titulo: "Matilda", autor: "Roald Dahl", año: 1988, edad_recomendada: "9+", disponibilidad:false, precio: 9000 },
  { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997, edad_recomendada: "10+", disponibilidad:false, precio: 22000 }
];

let librosAcademicos = [
  { titulo: "Introduction to Algorithms", autor: "Thomas H. Cormen", año: 2009, genero: "Informática", disponibilidad:true, precio: 42000 },
  { titulo: "The Selfish Gene", autor: "Richard Dawkins", año: 1976, genero: "Biología evolutiva", disponibilidad:true, precio: 38000 },
  { titulo: "Critique of Pure Reason", autor: "Immanuel Kant", año: 1781, genero: "Filosofía", disponibilidad:true, precio: 37500 },
  { titulo: "The Structure of Scientific Revolutions", autor: "Thomas S. Kuhn", año: 1962, genero: "Filosofía de la ciencia", disponibilidad:false, precio: 29500 }
];

let librosLatinoamericanos = [
  { titulo: "Rayuela", autor: "Julio Cortázar", pais: "Argentina", año: 1963, genero: 'novela', disponibilidad:false, precio: 25000 },
  { titulo: "Las venas abiertas de América Latina", autor: "Eduardo Galeano", pais: "Uruguay", año: 1955, genero: 'no ficción - Ensayo', disponibilidad:true, precio: 32000 },
  { titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", pais: "Perú", año: 1963, genero: 'Novela, ficción', disponibilidad:false, precio: 26000 },
  { titulo: "La casa de los espíritus", autor: "Isabel Allende", pais: "Chile", año: 1982, genero: 'Novela- Realismo mágico - ficción', disponibilidad:true,precio: 37000 }
];

let mensaje = document.getElementById("boton");

function elegirGeneros(){
    const msg = 'Bienvenido a nuestra Librería Virtual. Elija un género de su interés: \n1. Ficción \n2. No Ficción \n3. Infantiles \n4. Académicos \n5. Latinoamericanos \n6. Salir';

    genero = parseInt(prompt(msg));
    
    if (!isNaN(genero) && genero>0 && genero<=6 ) {
        return genero;
    } else {
        alert('Opción no válida, por favor intente nuevamente')
        elegirGeneros();
    }
}

function calcularPrecio(precio) {
    let iva = parseFloat(precio)*0.21;
    let precioTotal = parseFloat(precio) + iva; 
    return precioTotal;           
}

function elegirLibro(genero){
    let msg = "";
    let listaLibros = [];
    let nombreSeccion = "";

    switch(genero){
        case 1:
            listaLibros = librosFiccion;
            nombreSeccion = 'Ficción';
            break;
        case 2:
            listaLibros = librosNoFiccion;
            nombreSeccion = 'No ficción';
            break;
        case 3:
            listaLibros = librosInfantiles;
            nombreSeccion = 'Infantiles';
            break;
        case 4:
            listaLibros = librosAcademicos;
            nombreSeccion = 'Académicos';
            break;
        case 5:
            listaLibros = librosLatinoamericanos;
            nombreSeccion = 'Latinoamericanos';
            break;
        default:
            alert('Opción no válida, por favor intente nuevamente')
            break;
    }
    
    msg += `Sección: ${nombreSeccion}\n`
    listaLibros.forEach((libro, index) => {
        msg += `${index + 1}. ${libro.titulo}\n`
    })

    let libro = parseInt(prompt(msg));

    if (!isNaN(libro) && libro>0 && libro<=listaLibros.length) {
         alert(`Elegiste el libro:\nTítulo: ${listaLibros[libro-1].titulo}\nAutor: ${listaLibros[libro-1].autor}\nGénero: ${listaLibros[libro-1].genero}\nPrecio: $${listaLibros[libro-1].precio}`)    

        let confirmacion = confirm(`El total de su compra con IVA es de: $${calcularPrecio(listaLibros[libro-1].precio)}. ¿Desea comprar el libro: ${listaLibros[libro-1].titulo}?`)
    
        if (confirmacion) {
            let volver = confirm(`Muchas Gracias por su compra. ¿Desea ver otro libro de esta Sección?`)
            
            if (volver) {
                elegirLibro(genero)
            } 
        } 

    } else {
        alert('Opción no válida, por favor intente nuevamente')
        elegirLibro(genero);
    }

   
}

function menuPrincipal(){
    let salir = false;
    do{
        let genero = elegirGeneros();

        if(genero === 6){
            salir = true;
            break;
        }

        elegirLibro(genero);
    }while(!salir)
}

boton.addEventListener('click', menuPrincipal) 





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



/** 
function mostrar(seccion){
    
    let msg = "";
    seccion.forEach((val, index) => {
        msg += `${index + 1}. Título: ${val.titulo}\n`
    })
    return msg;
}

let option = prompt(mostrar())
*/
/* 

function mostrar(array){
    
    let msg = "";
    array.forEach((val, index) => {
        msg += `${index + 1}. ${val.title}\n`
    })
    return msg;
}

function mostrarLibrosSecciones(seccion, index){
            do {
                genero = parseInt(prompt(`Estos son nuestros libros:\n1. ${seccion[index].titulo} \n2. ${libro[index].titulo} \n3. ${libro[index].titulo} \n4. ${libro[index].titulo}\n5. Volver`))
                if (genero>0 && genero<5 && !isNaN(genero)) {
                        mostrarDetalleLibro(libro, (genero-1))
                    } else {
                        mostrarLibros();
                    }
                }            
            while (genero !==6);
}
}
*/

// function mostrarDetalleLibro(libro, index) {
//     alert(`Elegiste el libro:\n Título: ${libro[index].titulo}, Autor: ${libro[index].autor}, Género: ${libro[index].genero}, Precio: $${libro[index].precio}`)    
//     let confirmacion = confirm(`¿Desea comprar el libro: ${libro[index].titulo}?`)
//     if (confirmacion) {
//         alert(`El total de su compra con IVA es de: $${calcularPrecio(libro,index)}`);
    
//         let aceptar = confirm(`¿Desea ver otro libro de este género?`)
        // if (aceptar) {
//             do {
//                 genero = parseInt(prompt(`Estos son nuestros libros:\n1. ${libro[index].titulo} \n2. ${libro[index].titulo} \n3. ${libro[index].titulo} \n4. ${libro[index].titulo}\n5. Volver`))
//                 if (genero>0 && genero<5 && !isNaN(genero)) {
//                         mostrarDetalleLibro(libro, (genero-1))
//                     } else {
//                         mostrarLibros();
//                     }
//                 }            
//             while (genero !==6);
//         } else {
//             mostrarLibros()
//         }        
//     } else {
//         alert('Gracias por visitarnos. Espero vuelva pronto!')
//         mostrarLibros();
//     }
// }


// function mostrarLibros() {  
//     do {
//         let eleccion = parseInt(prompt('Bienvenido a nuestra Librería Virtual. Elija un género de su interés: \n1. Ficción \n2. No Ficción \n3. Infantiles \n4. Académicos \n5. Latinoamericanos \n6. Salir'))
//         let genero;

//         switch (eleccion) {
//                 case 1:
//                     do {
//                         genero = parseInt(prompt(`Elegiste Género Ficción. Estos son nuestros libros:\n1. ${librosFiccion[0].titulo} \n2. ${librosFiccion[1].titulo} \n3. ${librosFiccion[2].titulo} \n4. ${librosFiccion[3].titulo}\n5. Volver`))
//                         if (genero>0 && genero<5 && !isNaN(genero)) {
//                             mostrarDetalleLibro(librosFiccion, (genero-1))
//                         } else {
//                             mostrarLibros();
//                         }
//                         }            
//                     while (genero !==6);
//                     break;
//                 case 2:
//                     do {
//                         genero = parseInt(prompt(`Elegiste Género No Ficción. Estos son nuestros libros:\n1. ${librosNoFiccion[0].titulo} \n2. ${librosNoFiccion[1].titulo} \n3. ${librosNoFiccion[2].titulo} \n4. ${librosNoFiccion[3].titulo}\n5. Volver`))
//                         if (genero>0 && genero<5 && !isNaN(genero)) {
//                             mostrarDetalleLibro(librosNoFiccion, (genero-1))
//                         } else {
//                             mostrarLibros();
//                         }
//                         }            
//                     while (genero !==6);                    
//                     break;
//                 case 3:
//                     alert('Elegiste Género Infantiles')
//                     break;
//                 case 4:
//                     alert('Elegiste Género Académicos')
//                     break;
//                 case 5:
//                     alert('Elegiste Género Latinoamericanos')
//                     break;
//                 case 6:
//                     alert('Gracias por visitarnos. Espero vuelva pronto!')
//                     break;
//                 default:
//                     alert('Opción no válida, por favor intente nuevamente')
//                     break;
//                 }
//     } while (eleccion !== 6);
// }

// boton.addEventListener('click', menuPrincipal) 




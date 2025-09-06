const contenedor = document.getElementById('contenedor')
let carrito = []

//Cargar tareas desde Local Storage al inciar
// document.addEventListener('DOMContentLoaded', function(){
//     JSON.parse(localStorage.getItem('carrito')) || []
// })

function calcularPrecio(precio) {
    let iva = parseFloat(precio)*0.21;
    let precioTotal = parseFloat(precio) + iva;
    return precioTotal;
}

function precioFinalCarrito() {
    if (carrito.length === 0) return "El carrito está vacío."
    const nombres = carrito.map(producto => producto.titulo).join('-')
    const total = carrito.reduce((total, producto) => total + producto.precio, 0)
    return `Productos agregados:${nombres}.\nPrecio Final: $${total}`
}

// function mostrarCarritoActual() {
//     if(carrito == []) {
//         return 'Tu carrito está vacío'
//     }
// }

// function precioFinalCarrito() {
//     let total = 0;
//     carrito.forEach(producto =>{
//         total += producto.precio 
//     })
//     return total;
// }

const llamadaAlServidor = async() => {
    let llamada = await fetch('./libros.json')
    let data = await llamada.json()
    console.log(data)
    data.forEach(libro => {
        let div = document.createElement('div')
        div.classList.add("card", "col-12", "col-sm-6", "col-md-4", "col-lg-3")
        div.style="width: 18rem;"
        div.innerHTML =`   
         <img src=${libro.img} class="card-img-top img-fixed" alt="image">
         <div class="card-body d-flex flex-column">
            <h4 class="card-title text-uppercase fs-4 text-info-secondary fw-bold pb-4">${libro.titulo}</h4>
            <p class="card-text text-center fs-5 fw-bold text-body-emphasis">Autor: <span class="fw-normal">${libro.autor}</span></p>
            <p class="card-text text-center fs-5 fw-bold text-body-emphasis">Categoría: <span class="fw-normal">${libro.categoria}</span></p>
            <p class="fs-5 lh-lg fw-light text-body-secondary mt-auto">Precio: $${libro.precio}</p>
            <a href="#" class="buttons btn btn-primary fw-bold" data-id=${libro.id}>Agregar Carrito</a>
         </div>`
        contenedor.appendChild(div)
    });
    let botones = document.querySelectorAll('.buttons')
    botones.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            let id = e.target.dataset.id
            console.log(id)
            let productoEncontrado = data.find(libro => libro.id == id)
            //Obtener el carrito actual del LS
            JSON.parse(localStorage.getItem('carrito')) || []
            //Agrgo el producto al carrito
            carrito.push(productoEncontrado)
            //Guardar en el LS
            localStorage.setItem('carrito', JSON.stringify(carrito))
            console.log(carrito)
            console.log(productoEncontrado)
            Swal.fire({
                title: 'Producto Agregado',
                text: `${productoEncontrado.titulo} de la categoría ${productoEncontrado.categoria} se agregó al carrito.`,
                text: `Precio con IVA: $${calcularPrecio(productoEncontrado.precio)}`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, agregar al carrito!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Agregado Exitosamente!",    
                        text: `${precioFinalCarrito()}`,     
                        //text:`${mostrarCarritoActual()}`,           
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: 'Carrito Actual',
                        text: `${precioFinalCarrito()}`,
                        //text:`${mostrarCarritoActual()}`,
                        //text:`${localStorage.removeItem('carrito')}`,                        
                        icon: "info"
                    })
                }
            }); 
        })
    })
}

llamadaAlServidor()






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



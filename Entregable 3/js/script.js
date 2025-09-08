const contenedor = document.getElementById('contenedor')
let carrito = []
let precioTotal

function calcularPrecio(precio) {
    let iva = parseFloat(precio)*0.21;
    let precioTotal = parseFloat(precio) + iva;
    return precioTotal;
}

function precioFinalCarrito() {
    if (carrito.length === 0) return "El Carrito Actual está vacío."
    const nombres = carrito.map(producto => producto.titulo).join('-')
    const total = carrito.reduce((total, producto) => total + producto.precio, 0)
    return `Productos Agregados: ${nombres}.Precio Final: $${total + total*0.21}`
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

            console.log(carrito)
            console.log(productoEncontrado)
            Swal.fire({
                //title: 'Producto Agregado',
                title: `${productoEncontrado.titulo} de la categoría ${productoEncontrado.categoria} se agregó al carrito.`,
                text: `Precio con IVA: $${calcularPrecio(productoEncontrado.precio)}`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, Agregar al carrito!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //Obtener el carrito actual del LS
                    JSON.parse(localStorage.getItem('carrito')) || []        
                    
                    //Agrgo el producto al carrito            
                    carrito.push(productoEncontrado)
                    console.log(carrito)

                    //Guardar en el LS
                    //localStorage.setItem('carrito', JSON.stringify(carrito))
                    Swal.fire({
                        icon: "success",
                        title: "Agregado Exitosamente!\nMi carrito",    
                        text: `${precioFinalCarrito()}`,     
                        //text:`${mostrarCarritoActual()}`,                       
                    });
                } else {
                    Swal.fire({
                        icon: "info",
                        title: "Carrito Actual",
                        text: `${precioFinalCarrito()}`,
                        //text: "¿Quieres guardar los cambios?",
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Guardar Cambios",
                        denyButtonText: `No Guardar`
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            //Guardar en el LS
                            localStorage.setItem('carrito', JSON.stringify(carrito))
                            Swal.fire("Guardado!", "", "success");
                        } else if (result.isDenied) {  
                            text:`${localStorage.removeItem('carrito')}`
                            text:`${carrito = []}`,                          
                            Swal.fire("Los cambios no fueron guardados", "", "info")                            
                        }
                    });
                }
            }); 
        })
    })
}

llamadaAlServidor()






 



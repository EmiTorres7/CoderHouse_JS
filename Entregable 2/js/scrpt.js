let lista = document.getElementById('listaTareas')
//const tareas = []
const tareas = Array.from(document.querySelectorAll('#listaTareas li'));


let tareaInput = document.getElementById('tareaInput');
let botonNuevaTarea = document.getElementById('boton-agregar');
let formulario = document.getElementById('form')


//Funciones
let agregarTarea = function(){
    const nuevaTareaTexto = tareaInput.value.trim();

    if (nuevaTareaTexto !=="") {
        tareas.push(nuevaTareaTexto);
    
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = `${tareas.length}. ${nuevaTareaTexto}`;
        lista.appendChild(nuevoLi)
        nuevoLi.addEventListener('click', eliminarTarea)
            
        tareaInput.value = "";
        console.log(tareas);

    } else {
        let nuevoDiv = document.createElement('div');
        nuevoDiv.id = "mensajeError";
        nuevoDiv.innerHTML = `<p>Por favor escribe una tarea</p>`;
        form.appendChild(nuevoDiv);
    }
};

let comprobarInput = function(){
    alert('Comprobar input')
};

let eliminarTarea = function(){
    alert('Eliminar tarea')
};

//Eventos
botonNuevaTarea.addEventListener('click', agregarTarea);

tareaInput.addEventListener('click', comprobarInput);







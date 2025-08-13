let lista = document.getElementById('listaTareas')
let tareaInput = document.getElementById('tareaInput');
let botonNuevaTarea = document.getElementById('boton-agregar');
let formulario = document.getElementById('form')
let nuevoP;

//Cargar tareas desde Local Storage al inciar
document.addEventListener('DOMContenidoCargado', function(){
    let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas.forEach(tarea => {
        agregarLi(tarea);
    });
})

function agregarLi(texto) {
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = `# ${texto}`;
    //agregar a la lista
    lista.appendChild(nuevoLi)
    //eliminar tarea al hacer click
    nuevoLi.addEventListener('click', eliminarTarea)
}

//Función agregar tarea
let agregarTarea = function() {
    const nuevaTareaTexto = tareaInput.value.trim();

    if (nuevaTareaTexto !=="") {
        agregarLi(nuevaTareaTexto)
        //tareaInput.value = ""

        //almacenar en Local Storage
        let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareasGuardadas.push(nuevaTareaTexto);
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
        
        //limpiar input y error
        tareaInput.value = "";
        if (nuevoP) {
            formulario.removeChild(nuevoP);
            nuevoP = null;
        }
    } else {
        tareaInput.setAttribute("placeholder", "Agrega una tarea válida")
        tareaInput.className = "error"

        if(!nuevoP) {
            nuevoP = document.createElement('p')
            nuevoP.innerHTML = `<p style=padding:8px>Por favor escribe una tarea</p>`;
            formulario.appendChild(nuevoP);     
        }        
    }
};

//función comprobar input
let comprobarInput = function(){
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea")
    if (nuevoP) {
        formulario.removeChild(nuevoP);
        nuevoP = null;
    }
};

//Función eliminiar tarea
let eliminarTarea = function(tarea){
    let elementoLi = tarea.target //así capturo elvalor del elemento <li> clickeado
    let textoTarea = elementoLi.textContent.replace(/^#\s*/, "");

    lista.removeChild(elementoLi)
    alert("Tarea eliminada: " + textoTarea)
    
    //Eliminar tarea del local storage
    let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas = tareasGuardadas.filter(t => t !== textoTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));        
};

//Eventos
botonNuevaTarea.addEventListener('click', agregarTarea);
tareaInput.addEventListener('click', comprobarInput);






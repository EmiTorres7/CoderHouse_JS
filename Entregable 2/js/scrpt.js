let lista = document.getElementById('listaTareas')
let tareaInput = document.getElementById('tareaInput');
let botonNuevaTarea = document.getElementById('boton-agregar');
let formulario = document.getElementById('form')
let nuevoP;

//const tareas = Array.from(document.querySelectorAll('#listaTareas li'));

//Función agregar tarea
let agregarTarea = function(){
    const nuevaTareaTexto = tareaInput.value.trim();

    if (nuevaTareaTexto !=="") {

        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = `# ${nuevaTareaTexto}`;
        //agregar a la lista
        lista.appendChild(nuevoLi)
        //eliminar tarea al hacer click
        nuevoLi.addEventListener('click', eliminarTarea)
        //limpiar input    
        tareaInput.value = "";
        console.log(tareaInput);

        form.removeChild(nuevoP)
    } else {
        tareaInput.setAttribute("placeholder", "Agrega una tarea válida")
        tareaInput.className = "error"

        //Mostrar mensjae sólo si no existe nuevoDiv
        let nuevoP = document.createElement('p');
        nuevoP.innerHTML = `<p style=padding:8px>Por favor escribe una tarea</p>`;
        form.appendChild(nuevoP);     
    }
};

//función comprobar input
let comprobarInput = function(){
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea")
    form.removeChild(nuevoP)
};

//Función eliminiar tarea
let eliminarTarea = function(tarea){
    let elementoLi = tarea.target //así capturo elvalor del elemento <li> clickeado
    lista.removeChild(elementoLi)
    alert("Tarea eliminada: " + elementoLi.textContent)
};

//Eventos
botonNuevaTarea.addEventListener('click', agregarTarea);
tareaInput.addEventListener('click', comprobarInput);






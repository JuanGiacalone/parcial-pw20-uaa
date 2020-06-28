// defino el boton de agregar y el formulario generado
const botonAgregar = document.getElementById("agregarTarea");
const formTarea = document.getElementById("form");


// Extraigo del formulario los datos
const agregarTarea = () =>
{
    // creo array con datos
    let form  = Array.from(formTarea);

    // extraigo datos y establezco nombres de indices
     data = {    
         "titulo" : form[0].value,
         "descripcion" : form[1].value,
        "etiqueta" : form[2].value,
        "prioridad" : form[3].value,
                                 }
      
    //envio parámetros de entrada a la constante

    //No permito tareas sin titulo
    let vacio = "";
     if((data.titulo)!=vacio)
     {
        crearElementoTarea(data);
     }
     
}

//creo el elemento
const crearElementoTarea = (data) =>
{
    
    let color = "";
        // 0 = urgente 1 = requerido 2 = opcional / seteo el color indicado/
        switch(data.prioridad){
            case "0":
               color = "red"
            break;
            case "1":
               color = "yellow"
            break;  
            case "2" :
             color = "green"
            break;
        }
        
        //creo un div nuevo y le aplico sus clases 
    let elementoTarea = document.createElement("div");
        elementoTarea.classList.add("mi-card"); 
        elementoTarea.classList.add(color); 

        //obtengo la columna indicada
     // columna0 = backlog | columna1 = en progreso | columna2 = en revision | columna3 = en testing | columna4 = finalizada
    let columna = document.getElementById("columna"+data.etiqueta);
       
        

        // creo el titulo con su clase correspondiente
    let titulo = document.createElement("h5");
        titulo.insertAdjacentText('afterbegin',data.titulo);

        // creo la descripcion con su clase correspondiente
    let descripcion = document.createElement("p");
        descripcion.insertAdjacentText('afterbegin',data.descripcion);
        
        //creo el header y le agrego el titulo
    let headerTarea = document.createElement("div");
        headerTarea.classList.add("mi-card-header");
        headerTarea.append(titulo);
               
        //creo el body y le agrego la descripcion
    let bodyTarea = document.createElement("div");
        bodyTarea.classList.add("mi-card-body");
        bodyTarea.append(descripcion);

        //creo el footer de la tarea y lee agrego la clase
    let footerTarea = document.createElement("div");
        footerTarea.classList.add("mi-card-footer");
        
        //creo el boton tarea completada le agrego tipo y clases, y le inserto texto y funcion onclick
    let botonCompletada = document.createElement("button");
        botonCompletada.setAttribute("type","button");
        botonCompletada.classList.add("btn");
        botonCompletada.classList.add("btn-success");
        botonCompletada.insertAdjacentText("afterbegin","Completada");
        botonCompletada.onclick = eliminarTarea;
            

        //creo el boton tarea completada le agrego tipo y clases, y le inserto texto y funcion onclick
    let botonEliminar =  document.createElement("button");
        botonEliminar.setAttribute("type","button");
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn-danger");
        botonEliminar.insertAdjacentText("afterbegin","Eliminar");
        botonEliminar.onclick = eliminarTarea;

        
        //le agrego al footer ambos botones
        footerTarea.append(botonCompletada,botonEliminar);

        //al elemento tarea le agrego las tres partes creadas
        elementoTarea.append(headerTarea,bodyTarea,footerTarea);

        // el elemento es agregado a la columna correspondiente
        columna.append(elementoTarea);

        //obtengo el boton de cerrar el modal y simulo un click en el.
    let botonCerrar = document.getElementById("botonCerrar");
        botonCerrar.click();

        modalConfirms();
}

// agrego listener para el boton agregarTarea
botonAgregar.addEventListener("click",agregarTarea);

//  elimino tarea manejando objetivo y nodos padres e hijo.
const eliminarTarea =  (evento) =>{
    let tarea = (evento.target.parentNode).parentNode;
    let columna = (tarea.parentNode);
    columna.removeChild(tarea);
}

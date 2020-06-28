const botonAgregar = document.getElementById("agregarTarea");
const formTarea = document.getElementById("form");



const crearElementoTarea = (data) =>
{
    //creo un div nuevo
    const elementoTarea = document.createElement("div");
    // columna0 = backlog columna1 = en progreso .../obtengo la columna indicada/
    const columna = document.getElementById("columna"+data.etiqueta);

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
    
  
        elementoTarea.classList.add("mi-card"+color); /// aplico la clase al div creado
        
        const headerTarea = document.createElement("div").classList.add("mi-card-header")
                /// creo 1 cabecera y un body nuevos
        const bodyTarea = document.createElement("div").classList.add("mi-card-body");

        const footerTarea = document.querySelector('#elfooter').cloneNode(true);

       

        headerTarea.insertAdjacentHTML('afterbeing','<h5>'+data.descripcion+'<h5>');

        console.log(headerTarea);

        bodyTarea.insertAdjacentHTML('afterbeing','<p>'+data.descripcion+'</p>');
        
        elementoTarea.appendChild(headerTarea,bodyTarea,footerTarea);

        columna.appendChild(elementoTarea);

    
}


const agregarTarea = () =>
{
    
    let form  = Array.from(formTarea);
    console.log(Array.from(formTarea));
    data = {    
    "titulo" : form[0].value,
    "descripcion" : form[1].value,
    "etiqueta" : form[2].value,
    "prioridad" : form[3].value,
    }

    crearElementoTarea(data);
}



botonAgregar.addEventListener("click",agregarTarea);




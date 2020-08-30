// Agregar el contenido del input a la lista
$("input[type='text']").keypress(function (event) {
    //filtrar para que sólo se active cuando aprietan Enter
    if (event.key == "Enter") {
        var textoDelInput = $(this).val(); // Capturamos el texto del input

        var liNuevo = "<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>"; // Generamos el <li> nuevo con el texto capturado del input

        $("ul").append(liNuevo); // Insertando el liNuevo al listado

        $(this).val(""); // Limpiar el input
    }
});

$("ul").on("click", "li", function () {
    $(this).toggleClass("completado");
});

// Borrar los items completados
$("ul").on("click", "span", function (event) {
    event.stopPropagation(); // Para que no se propage el evento click a los elementos que contienen al <span>

    var liContenedor = $(this).parent(); // Capturamos al <li> padre del <span> sobre el que se dió click

    // Al <li> padre le aplicamos el fadeOut
    liContenedor.fadeOut(500, function () {
        $(this).remove();
    });
});

$(".fa-arrows-alt-v").click(function () {
    $("ul").slideToggle();
})


//---- P L E D U -----En este evento probamos la funcional de Span al hacer click. Agregamos el Event y StopPropagation para que no suceda el evento en cadena. Lo que quiere decir que cuando hagamos click en Borrar, sea solo el alert sin el tachado. 
/*$("span").click(function(event){
    alert("Hice click en un SPAN");
    event.stopPropagation();
});*/


/*$("span").click(function (event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});*/

//------ Js Vainilla -------
/*$("span").click(function (event){
    event.stopPropagation();// Para que no se propague el evento click a los elementos que contienen al <span>

    var liContenedor = $(this).parent();//capturamos al <li> padre del <span> sobre el que se dio click.

    //Al <li> padre le aplicamos el FadeOut
    liContenedor.fadeOut(500, function () {
        $(this).remove();
    });
});*/

// ----- P L E D U ------Agregar el contenido del input a la lista
/*$("input[type='text']").keypress(function (event) {
    //filtrar para que sólo se active cuando aprietan Enter
    if (event.key == "Enter") {
        //append inserta contenido al final
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
        // se borra el contenido del input
        $(this).val("");
        event.stopPropagation();
    }
});*/


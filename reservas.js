tedes = document.getElementsByTagName("td");
activo = 0;
$(function() {
    $(tedes).click(function() {
        if (activo == 0) {
            $('#div_oculto').show("slow")
            activo = 1;
        } else if (activo == 1) {
            $('#div_oculto').hide("slow")
            $('#div_oculto').show("slow")
            activo = 1;
        }
    })
});
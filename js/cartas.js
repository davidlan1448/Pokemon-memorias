imagenes = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"
,"img/img7.jpg","img/img8.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"
,"img/img7.jpg","img/img8.jpg"];
var aleatorio;
function Cartas(){
    aleatorio = Math.floor(Math.random()*(imagenes.length));
    seleccion = imagenes[aleatorio];
    return seleccion;
}
$("body").ready(function(){
    for(let i=1;i<5;i++){
        for(let j=1;j<5;j++){
            $("#tr"+i+" td:nth-child("+j+") .contenedor .atras").html("<img src='"+Cartas()+"'>");
            imagenes.splice(aleatorio, 1);  
        }
    }
});
var carta = false
var ruta1;
var click = 0;
var con=0;
$(document).on("click",".carta",function(){
    if(click<1){
        click++;
        let rutaActual = $(this);
        rutaActual.css({'transform':'rotateY(180deg)',"transition":"1s"});
        rutaActual.addClass("aux");
        rutaActual.removeClass("carta");
        if(carta){
            if(ruta1.find(".atras img").attr("src") == rutaActual.find(".atras img").attr("src")){
                con++;
                setTimeout(function(){
                    $(".pts").html(con);
                },700);
                if(con==8){
                    swal("!Felicidades¡, Los atrapaste a todos.", {
                        icon: "img/ganaste.png",
                    });
                }
                else{
                    setTimeout(function(){
                        swal("!Felicidades¡, acertaste", {
                            icon: "img/acertaste.png",
                        });
                        rutaActual.removeClass("carta");
                        ruta1.removeClass("carta");
                    },700);
                }
            }
            else{
                setTimeout(function(){
                    rutaActual.css({'transform':'rotateY(0deg)',"transition":"1s"});
                    ruta1.css({'transform':'rotateY(0deg)',"transition":"1s"});
                    ruta1.addClass("carta");
                    ruta1.removeClass("aux");
                    rutaActual.addClass("carta");
                    rutaActual.removeClass("aux");
                },1000);
                setTimeout(function(){
                    swal("Fallaste, intentalo otra vez", {
                        icon: "img/fallaste.png",
                    });
                },600);
            }
            carta = false
        }
        else{
            ruta1 = rutaActual;
            carta = true;
        }
        setTimeout(function(){
            click=0;
        },420);
    }
});
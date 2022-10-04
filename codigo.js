function bienvenidaAlSitio(){
    alert ("Bienvenido a Dealers de Música");
    let nombre = prompt ("Ingrese su nombre");
    while(nombre===" "){
        nombre = prompt("Ingrese su nombre");
    }
    alert("Bienvenid@ "+nombre);
    }

bienvenidaAlSitio();

let bandaFavorita = prompt ("¿Cuál es tu banda favorita?");
if(bandaFavorita == "Guns n' Roses"){
alert("¡También es nuestra banda favorita!");
}else{
alert(bandaFavorita + " es genial! Disfruta todo el contenido sobre ellos que tenemos en nuestra web");
}

let banda=prompt("Ingresa una banda y te diremos los albumes que tenemos en stock (S para finalizar)");
while(banda !="S"){
    switch(banda){
        case "Guns N Roses":
        alert("Los albumes que tenemos en stock son: Appetite for Destruction, Use Your Illusion I y Use Your Illusion II");
        break;
        
        case "Rolling Stones":
        alert("Los albumes que tenemos en stock son: Sticky Fingers, The Rolling Stones y Tattoo You");
        break;

        case "The Beatles":
        alert("Los albumes que tenemos en stock son: Abbey Road y Help!");
        break;

        case "5 Seconds Of Summer":
            alert("Los albumes que tenemos en stock son: Sounds Good Feels Good, Youngblood y Calm");
            break;
            
            case "Arctic Monkeys":
            alert("Los albumes que tenemos en stock son: Favourite Worst Nightmare y AM");
            break;
    
            case "A-ha":
            alert("Los albumes que tenemos en stock son: Hunting High and Low, Stay on These Roads, Scoundrel Days y Lifelines");
            break;

            case "Nirvana":
                alert("Los albumes que tenemos en stock son: Nevermind y In Utero");
                break;
        
            case "Queen":
            alert("Los albumes que tenemos en stock son: Queen, A Kind of Magic, The Miracle, Innuendo y Made in Heaven");
            break;

            default:
            alert("No tenemos nada en stock de la banda elegida");
            break;
    }
    banda=prompt("Ingresa una banda y te diremos los albumes que tenemos en stock (S para finalizar)");
    }

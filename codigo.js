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
class Album{
    constructor(titulo, precio, id){
        this.titulo = titulo;
        this.precio = Number(precio);
        this.vendido = false;
        this.id = id;
        }
        vender (){
            this.vendido = true;
        }
        mostrar(){
            return this.id+' '+this.titulo+' $'+this.precio+'/n';
        }
        textoCompra(){
            return 'El álbum seleccionado es '+this.titulo+'/nSu precio es de $ '+this.precio;
        }
    }
const albums = [];
const album1 = new Album('Use Your Illusion I',1500,1);
const album2 = new Album('Sticky Fingers The Rolling Stones',1800,2);
const album3 = new Album('Abbey Road The Beatles',1700,3);
const album4 = new Album('Youngblood 5 Seconds Of Summer',1400,4);
const album5 = new Album('AM Arctics Monkeys',1650,5);
const album6 = new Album('Stay On These Roads Aha',1800,6);
const album7 = new Album('Nevermind Nirvana', 1415,7);
const album8 = new Album('The Miracle Queen',1780,8);

albums.push(album1, album2, album3, album4, album5, album6, album7, album8);

function obtenerAlbums(){
    let misAlbums = 'Ingrese el número de álbum que desea adquirir /n';
    for (const album of albums){
        misAlbums = misAlbums + album.mostrar();
    }
    return misAlbums;
}
let albumStock = false;

ingresarAlbums();

if(albumStock == false){
    alert('No existe stock de el album ingresado');
    ingresarAlbums();
}

function ingresarAlbums(){
    let numeroIngresado=Number (prompt(obtenerAlbums));
    albums.forEach(album => {
        if(album.id===numeroIngresado){
            albumStock=true;
            alert(album.textoCompra());
        }
    }
)}
console.log(albums);

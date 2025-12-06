import {Injectable} from '@angular/core';


@Injectable({providedIn:'root'})
export class PersonajesServices{
    //private Personajes:any[]=[
    private Personajes:Personajes[]=[
      {  nombre: "Mario",
anio: "1981 (aparición en Donkey Kong como Jumpman) / 1985 (Super Mario Bros.)",
desc: "El fontanero más famoso del mundo y mascota de Nintendo. Un héroe alegre y valiente de Mushroom Kingdom.",
img: "img/mario.jpg",
casa: "Nintendo",
showDescription: false}
,

{
nombre: "Master Chief (John-117)",
anio: "2001",
desc: "Supersoldado Spartan-II y el principal protagonista de la serie Halo. Un ícono de los videojuegos de disparos en primera persona y de Xbox.",
img: "img/masterchief.jpg",
casa: "Microsoft (Bungie/343 Industries)",
showDescription: false
}

,{
nombre: "Link",
anio: "1986",
desc: "El héroe silencioso que a menudo salva el reino de Hyrule y la Princesa Zelda de Ganon. Famoso por su túnica verde y la Espada Maestra.",
img: "img/link.jpg",
casa: "Nintendo",
showDescription: false
}

,{
nombre: "Lara Croft",
anio: "1996",
desc: "Arqueóloga aventurera y heroína de acción de la serie Tomb Raider. Un ícono femenino de los videojuegos.",
img: "img/laracroft.jpg",
casa: "Square Enix (Eidos/Crystal Dynamics)",
showDescription: false
}

,{
nombre: "Sonic the Hedgehog",
anio: "1991",
desc: "El erizo azul superveloz y mascota de SEGA. Creado para ser el rival de Mario.",
img: "img/sonic.jpg",
casa: "SEGA",
showDescription: false
}

,{
nombre: "Kratos",
anio: "2005",
desc: "El fantasma de Esparta y antihéroe de la serie God of War. Conocido por su inmensa fuerza y sed de venganza.",
img: "img/kratos.jpg",
casa: "Sony (Santa Monica Studio)",
showDescription: false
}

,{
nombre: "Pac-Man",
anio: "1980",
desc: "Protagonista del videojuego de arcade del mismo nombre. Uno de los personajes más reconocibles y un pionero de la industria.",
img: "img/pacman.jpg",
casa: "Bandai Namco",
showDescription: false
}

,{
nombre: "Solid Snake",
anio: "1987",
desc: "Agente de infiltración y protagonista de la serie Metal Gear Solid. Un experto en operaciones encubiertas y espionaje.",
img: "img/snake.jpg",
casa: "Konami",
showDescription: false
}

,{
nombre: "Cloud Strife",
anio: "1997",
desc: "Ex-SOLDADO con una espada gigante y protagonista de Final Fantasy VII. Un personaje con un profundo desarrollo emocional.",
img: "img/cloud.jpg",
casa: "Square Enix",
showDescription: false
}

,{
nombre: "Pikachu",
anio: "1996",
desc: "El Pokémon eléctrico y mascota principal de la franquicia Pokémon. Famoso por su grito de 'Pika Pika'.",
img: "img/pikachu.jpg",
casa: "Nintendo (Game Freak/The Pokémon Company)",
showDescription: false
      }
    ]
        constructor(){
//console.log("Servicio listo para usarse");
    }
getPersonaje():Personajes[]{
    return this.Personajes;
}

toggleDescription(personaje: Personajes): void {
  personaje.showDescription = !personaje.showDescription;
}

getPersonajeByIndex(idx: number): Personajes {
  return this.Personajes[idx];
}

  }



export interface Personajes{
    nombre:string;
    anio:string;
    desc:string;
    img:string;
    casa:string;
    showDescription: boolean;

}


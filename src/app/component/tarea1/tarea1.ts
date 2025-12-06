import { Component } from '@angular/core';
@Component({
  selector: 'tarea1',
  imports: [],
  templateUrl: './tarea1.html',
  styleUrl: './tarea1.css',
})
export class tarea1 {}
  
  function activar (quien:string):void {
    let message:string;
    message = `${quien} activo la batiseñal`;
    console.log (message);
  }
  activar('Axel');

  function activar1 (quien:string, objeto:string='batiseñal'):void {
    let message:string;
    message = `${quien} activo la ${objeto}`;
    console.log (message);
    }
  activar1('Bianey');

  function activar2 (quien:string,momento?:string,objeto:string='batiseñal'):void {
    let message:string;
    message = `${quien} activo la ${objeto},${momento}`;
    console.log (message);
  }
  activar2('Axel','en la mañana');

  function activar3 (quien:string,momento?:string,objeto:string='batiseñal'):void {
    let message:string;
    if(momento){
    message = `${quien} activo la ${objeto},${momento}`;
  }else{
    message = `${quien} activo la ${objeto}`;
  }
  console.log (message);
  }
  activar3('Lenny','en la noche');

  let miFlecha = function (a:string) {
    return a;
  }
  let mifuncionF = (a:string) => a+1;
  console.log (miFlecha('10'));
  console.log (mifuncionF('Libreta'));

  //destructuracion de objetos
let personaje =
{
    nombre: 'Tony',
    clave: 'Ironman',
    poder: 'Armadura inteligente'
}
/*
let nombre = personaje.nombre;
let clave = personaje.clave;
let poder = personaje.poder;
console.log(nombre, clave, poder)
*/
//let { poder, nombre, clave } = personaje;
//console.log(poder,nombre,clave);

console.log(personaje.nombre,personaje.clave,personaje.poder);

//destructuracion de arreglo
let personajes: string[] = ['Tony', 'Steve', 'Thor'];
let [Ironman, CapitanAmerica, DiosTrueno] = personajes;
console.log(DiosTrueno, Ironman, CapitanAmerica)


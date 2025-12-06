import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anio:number;
  constructor(){
  var dataobj = new Date();
  var b = dataobj.getFullYear();
  this.anio = b;
}



}

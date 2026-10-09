import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  
  idiomaElegido ="";
  perfilElegido ="";
  modalidadElegida ="";
  disponibilidadElegida="";

  mostrarOrientacion= false;
  mostrarComparacion =false;

  orientar(
    idioma:string,
    perfil: string,
    modalidad: string,
    disponibilidad: string
  ){
    this.idiomaElegido = idioma;
    this.perfilElegido = perfil;
    this.modalidadElegida = modalidad;
    this.disponibilidadElegida = disponibilidad;

    this.mostrarOrientacion=true;
    this.mostrarComparacion = true;
  }
}

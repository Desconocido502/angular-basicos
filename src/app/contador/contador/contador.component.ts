import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1> {{ titulo }} </h1>

    <h1> La base es: <strong> {{ base }} </strong></h1>

    <button (click)="acumularBase(-base);"> - {{ base }} </button>

    <span> {{ numero }} </span>

    <button (click)="acumularBase(base);"> + {{ base }} </button>
  `
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;
  //base : number = 5;
  acumularBase(valor: number) {
    this.numero += valor;
  };
}

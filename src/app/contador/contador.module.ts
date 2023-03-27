import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    //Aqui van componentes
    ContadorComponent
  ]
})
export class ContadorModule { }

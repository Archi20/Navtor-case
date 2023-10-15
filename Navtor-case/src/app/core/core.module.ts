import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    NavigationBarComponent,
    NotFoundComponent
  ],
  exports:[
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ]
})
export class CoreModule { }

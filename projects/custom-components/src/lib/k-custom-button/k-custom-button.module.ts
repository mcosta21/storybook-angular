import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KCustomButtonComponent } from './k-custom-button.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    KCustomButtonComponent
  ],
  exports: [
    KCustomButtonComponent
  ]
})
export class KCustomButtonModule { }

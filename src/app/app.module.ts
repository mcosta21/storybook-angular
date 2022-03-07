import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';

import { KCustomButtonModule } from 'custom-components';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KCustomButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

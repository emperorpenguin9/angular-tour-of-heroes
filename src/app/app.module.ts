import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [AppComponent],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HeroesComponent],
})
export class AppModule {}

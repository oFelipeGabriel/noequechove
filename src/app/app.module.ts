import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayCardComponent } from './components/day-card/day-card.component';

import {MatCardModule} from '@angular/material/card';
import { CityInfosComponent } from './components/city-infos/city-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayCardComponent,
    CityInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

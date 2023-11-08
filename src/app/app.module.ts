import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { ClimateCardComponent } from './components/climate-card/climate-card.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CityComponent } from './components/climate-card/city/city.component';
import { TemperatureComponent } from './components/climate-card/temperature/temperature.component';
import { DetailsComponent } from './components/climate-card/details/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    MenuTitleComponent,
    ClimateCardComponent,
    RodapeComponent,
    CityComponent,
    TemperatureComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
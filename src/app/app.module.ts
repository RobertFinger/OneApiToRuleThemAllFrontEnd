import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LakeCardComponent } from './component/lake-card/lake-card.component';
import { AirCardComponent } from './component/air-card/air-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DisplayComponent } from './component/display/display.component';
import { DateConverterPipe } from './pipes/date-converter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LakeCardComponent,
    AirCardComponent, 
    DisplayComponent, DateConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

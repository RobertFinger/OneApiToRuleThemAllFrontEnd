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
import { ReactiveFormsModule } from '@angular/forms';
import { AirFormComponent } from './component/air-form-component/air-form-component.component';
import { LakeFormComponent } from './component/lake-form-component/lake-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LakeCardComponent,
    AirCardComponent, 
    DisplayComponent, 
    DateConverterPipe,
    AirFormComponent,
    LakeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

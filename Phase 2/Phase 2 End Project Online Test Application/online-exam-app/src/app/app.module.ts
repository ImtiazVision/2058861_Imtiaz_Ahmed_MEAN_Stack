import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdfExamComponent } from './mdf-exam/mdf-exam.component';
import { TdfExamComponent } from './tdf-exam/tdf-exam.component';


@NgModule({
  declarations: [
    AppComponent,
    MdfExamComponent,
    TdfExamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

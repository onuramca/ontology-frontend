import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OntologyComponent } from './ontology/ontology.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OntologyService} from "./service/ontology.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OntologyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OntologyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormatComponent } from './format/format.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { InputFormatDirective } from './input-format.directive';
import {FormsModule} from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TemplatevartestComponent } from './templatevartest/templatevartest.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component'

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    FormatComponent,
    InputFormatDirective,
    ContactFormComponent,
    TemplatevartestComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

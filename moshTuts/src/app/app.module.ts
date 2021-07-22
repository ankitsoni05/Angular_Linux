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
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveSignupFormComponent } from './reactive-signup-form/reactive-signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveSignupForm2Component } from './reactive-signup-form2/reactive-signup-form2.component';
import { HttpservicestutsComponent } from './httpservicestuts/httpservicestuts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostsService } from './services/posts.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    FormatComponent,
    InputFormatDirective,
    ContactFormComponent,
    TemplatevartestComponent,
    TemplatedrivenformComponent,
    ReactiveSignupFormComponent,
    ReactiveSignupForm2Component,
    HttpservicestutsComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

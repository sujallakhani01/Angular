import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { RadioCheckComponent } from './radio-check/radio-check.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RadioCheckComponent,
    TextareaComponent,
    SubmitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

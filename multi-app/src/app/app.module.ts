import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameComponent } from './form_components/name_field/name/name.component';
import { EmailComponent } from './form_components/email_field/email/email.component';
import { GenderComponent } from './form_components/gender_field/gender/gender.component';
import { HobbiesComponent } from './form_components/hobbies_field/hobbies/hobbies.component';
import { NationalityComponent } from './form_components/nationality_field/nationality/nationality.component';
import { SubmitComponent } from './form_components/submit_btn/submit/submit.component';
import { FormsModule } from '@angular/forms';

import { BirthdateComponent } from './form_components/birthdate_field/birthdate/birthdate.component';
import { DateFormatComponent } from './form_components/date_format_field/date-format/date-format.component';
import { ShowDataComponent } from './form_components/show_data/show-data/show-data.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    EmailComponent,
    GenderComponent,
    HobbiesComponent,
    NationalityComponent,
    SubmitComponent,
    BirthdateComponent,
    DateFormatComponent,
    ShowDataComponent,
    LabelComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [
    NameComponent,
    EmailComponent,
    GenderComponent,
    HobbiesComponent,
    NationalityComponent,
    SubmitComponent,
    BirthdateComponent,
    DateFormatComponent,
    ShowDataComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    EmailComponent,
    NameComponent,
    GenderComponent,
    HobbiesComponent,
    SubmitComponent,
    NationalityComponent,
  ],
})
export class AppModule {}

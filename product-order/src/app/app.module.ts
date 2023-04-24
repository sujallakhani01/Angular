import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import { InitialLetterComponent } from './initial-letter/initial-letter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    CustomBtnComponent,
    InitialLetterComponent,
  ],
  imports: [BrowserModule, AgGridModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

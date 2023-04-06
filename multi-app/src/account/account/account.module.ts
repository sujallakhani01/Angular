import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [BrowserModule, AppModule],
  bootstrap: [AccountComponent],
})
export class AccountModule {}

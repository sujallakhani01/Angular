import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [BrowserModule, AppModule, FormsModule],
  bootstrap: [UsersComponent],
})
export class UsersModule {}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.css'],
})
export class BirthdateComponent {
  today;
  @Output() emitDate = new EventEmitter<string>();
  constructor() {
    this.today = new Date().toISOString().split('T')[0];
  }
  setDate(birthdate: string) {
    this.emitDate.emit(birthdate);
  }
}

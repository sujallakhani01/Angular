import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css'],
})
export class GenderComponent {
  @Output() emitGender = new EventEmitter<string>();

  changeRadio(value: any): void {
    if (value.currentTarget.checked)
      this.emitGender.emit(value.currentTarget.value.toString());
  }
}

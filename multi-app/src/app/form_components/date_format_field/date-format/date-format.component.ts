import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.css'],
})
export class DateFormatComponent {
  @Output() emitDateFormat = new EventEmitter<string>();

  changeRadio(value: any): void {
    if (value.currentTarget.checked)
      this.emitDateFormat.emit(value.currentTarget.value);
  }
}

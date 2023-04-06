import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent {
  hobbies: string[] = [];
  @Output() emitHobbies = new EventEmitter<string[]>();

  changeCheck(value: any): void {
    if (value.currentTarget.checked)
      this.hobbies.push(value.currentTarget.value);
    else
      this.hobbies.splice(this.hobbies.indexOf(value.currentTarget.value), 1);

    this.emitHobbies.emit(this.hobbies);
  }
}

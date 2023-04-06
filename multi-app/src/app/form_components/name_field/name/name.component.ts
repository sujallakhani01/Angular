import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent {
  @Output() emitName;
  constructor() {
    this.emitName = new EventEmitter<string>();
  }
  // ngDoCheck(): void {
  //   this.emitName.emit(
  //     (<HTMLInputElement>document.getElementById('nameInput')).value
  //   );
  //   console.log((<HTMLInputElement>document.getElementById('nameInput')).value);
  // }
  setText(): void {
    this.emitName.emit(
      (<HTMLInputElement>document.getElementById('nameInput')).value
    );
  }
}

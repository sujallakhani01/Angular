import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent {
  @Output() emitEmail = new EventEmitter<string>();
  // ngDoCheck(): void {
  //   this.emitEmail.emit(
  //     (<HTMLInputElement>document.getElementById('emailInput')).value
  //   );
  // }

  setEmailId() {
    this.emitEmail.emit(
      (<HTMLInputElement>document.getElementById('emailInput')).value
    );
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css'],
})
export class NationalityComponent {
  @Output() emitNationality = new EventEmitter<string>();

  setOption(opiton: string) {
    this.emitNationality.emit(opiton);
  }
}

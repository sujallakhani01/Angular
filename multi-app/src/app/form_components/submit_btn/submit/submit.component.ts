import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent {
  @Output() emitClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  isclick: boolean = false;
  emitEvent(): void {
    this.isclick = true;
    this.emitClick.emit(this.isclick);
    this.isclick = false;
  }
}

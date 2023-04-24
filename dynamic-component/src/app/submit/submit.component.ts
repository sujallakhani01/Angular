import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitComponent {
  @Output() emitClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  // // isclick: boolean = false;
  // constructor(private mainService: MainService) {
  //   // mainService.clickSubject.subscribe(
  //   //   (data: boolean) => (this.isclick = data)
  //   // );
  // }
  emitEvent(): void {
    this.emitClick.emit(true);
  }
}

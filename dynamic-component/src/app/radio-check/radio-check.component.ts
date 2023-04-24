// {
//   componentId: this.componentId,
//   type: this.type,
//   value: this.checkedArray.join(','),
//   required: this.required,
// }

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-radio-check',
  templateUrl: './radio-check.component.html',
  styleUrls: ['./radio-check.component.css'],
})
export class RadioCheckComponent implements OnInit, OnDestroy {
  @Input() componentId: string = '';
  @Input() class: string = 'form-checks';
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() id: string = '';
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() checkarray: string[] = [];
  @Input() required: boolean = false;
  @Output() data = new EventEmitter<object>();
  checkedArray: string[] = [];
  errorMessege: string = '';
  isverify: boolean = true;

  constructor(private mainService: MainService) {
    mainService.clickSubject.subscribe((data: boolean) => {
      if (data) mainService.setverify(this.verifyField());
    });
  }

  ngOnInit() {
    this.data.emit({
      componentId: this.componentId,
      label: this.label != '' ? this.label : this.type,
      value: '',
    });
  }

  emitData(event: any) {
    if (!event.target.checked) {
      this.checkedArray.splice(
        this.checkedArray.indexOf(event.target.value),
        1
      );
    } else if (this.checkedArray.indexOf(event.target.value) < 0) {
      if (this.type == 'radio') this.checkedArray = [];
      this.checkedArray.push(event.target.value);
    }
    this.data.emit({
      componentId: this.componentId,
      label: this.label.length != 0 ? this.label : this.type,
      value: this.checkedArray,
    });
  }
  getData(): EventEmitter<object> {
    return this.data;
  }
  verifyField(): boolean {
    if (this.required && this.checkedArray.length <= 0) {
      this.isverify = false;
      this.errorMessege = 'Select any one option';
      return false;
    }
    this.errorMessege = '';
    this.isverify = true;
    return true;
  }
  ngOnDestroy() {
    this.componentId = '';
    this.class = 'form-checks';
    this.type = '';
    this.value = '';
    this.id = '';
    this.checked = false;
    this.label = '';
    this.name = '';
    this.checkarray = [];
    this.required = false;
    this.checkedArray = [];
    this.errorMessege = '';
    this.isverify = true;
  }
}

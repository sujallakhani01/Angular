// {
//   componentId: this.componentId,
//   type: this.type,
//   value: this.elevalue,
//   min: this.min,
//   max: this.max,
//   required: this.required,
// }

import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() componentId: string = '';
  @Input() type: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() class: string = 'form-control';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() min: number | string = -Infinity;
  @Input() max: number | string = Infinity;
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() allowpastdate: boolean = true;
  @Output() data = new EventEmitter<object>();
  errorMessege: string = '';
  isverify: boolean = true;
  elevalue: string = '';

  constructor(private mainService: MainService) {}

  ngAfterViewInit() {
    this.mainService.clickSubject.subscribe((data: boolean) => {
      // console.log('required ' + this.required);
      // console.log('From subscibe ' + data);
      // this.verifyField();
      if (data) {
        this.mainService.setverify(this.verifyField());
      }
    });
  }

  ngOnInit(): void {
    if (!this.allowpastdate && this.type == 'date') {
      this.min = new Date().toISOString().split('T')[0];
    }
    this.data.emit({
      componentId: this.componentId,
      label: this.label != '' ? this.label : this.type,
      value: '',
    });
  }

  emitData(event: any): void {
    this.elevalue = event.target.value;
    this.data.emit({
      componentId: this.componentId,
      label: this.label != '' ? this.label : this.type,
      value: event.target.value,
    });
  }

  getData(): EventEmitter<object> {
    return this.data;
  }
  verifyField(): boolean {
    const pattern = /\w+@\w+\.[a-z]{2,4}\.*[a-z]{0,2}/;
    if (
      this.required &&
      (this.elevalue.length <= 0 ||
        this.elevalue.replaceAll(' ', '').length <= 0)
    ) {
      this.isverify = false;
      this.errorMessege = 'This field is required!';
      return false;
    } else if (this.type == 'email' && !pattern.test(this.elevalue)) {
      this.errorMessege = 'Enter valid email address!';
      this.isverify = false;
      return false;
    } else if (
      this.type == 'number' &&
      (this.elevalue > this.max || this.elevalue < this.min)
    ) {
      this.errorMessege = 'Enter valid number!';
      this.isverify = false;
      return false;
    }
    this.isverify = true;
    this.errorMessege = '';
    return this.isverify;
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy is called');
    this.componentId = '';
    this.type = '';
    this.id = '';
    this.placeholder = '';
    this.class = 'form-control';
    this.value = '';
    this.label = '';
    this.min = -Infinity;
    this.max = Infinity;
    this.name = '';
    this.required = false;
    this.allowpastdate = true;
    this.errorMessege = '';
    this.isverify = true;
    this.elevalue = '';
  }
}

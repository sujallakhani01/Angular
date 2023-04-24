// {
//   componentId: this.componentId,
//   type: this.type,
//   value: this.elevalue,
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
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit, OnDestroy {
  @Input() componentId: string = '';
  @Input() type: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() class: string = 'form-control';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() cols: number = 30;
  @Input() rows: number = 10;
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Output() data = new EventEmitter<object>();
  errorMessege: string = '';
  isverify: boolean = true;
  elevalue: string = '';

  constructor(private mainService: MainService) {
    mainService.clickSubject.subscribe((data: boolean) => {
      // this.verifyField();
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
    if (
      this.required &&
      this.elevalue.length <= 0 &&
      this.elevalue.replaceAll(' ', '').length <= 0
    ) {
      this.isverify = false;
      this.errorMessege = 'This field is required';
      return false;
    }
    this.isverify = true;
    this.errorMessege = '';
    return true;
  }

  ngOnDestroy() {
    this.componentId = '';
    this.type = '';
    this.id = '';
    this.placeholder = '';
    this.class = 'form-control';
    this.value = '';
    this.label = '';
    this.cols = 30;
    this.rows = 10;
    this.name = '';
    this.required = false;
    this.errorMessege = '';
    this.isverify = true;
    this.elevalue = '';
  }
}

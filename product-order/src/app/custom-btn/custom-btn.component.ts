import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { AgPromise, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.css'],
})
export class CustomBtnComponent implements ICellRendererAngularComp {
  btnClass: string = 'btn-outline-success';
  value: string = 'Edit';
  agInit(params: ICellRendererParams<any, any, any>): void {
    if ('name' in params && params.name == 'edit') {
      this.btnClass = 'btn-outline-success';
      this.value = 'Edit';
    } else {
      this.btnClass = 'btn-outline-danger';
      this.value = 'Delete';
    }
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
}

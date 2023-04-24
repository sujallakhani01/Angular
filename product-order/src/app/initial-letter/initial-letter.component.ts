import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-initial-letter',
  templateUrl: './initial-letter.component.html',
  styleUrls: ['./initial-letter.component.css'],
})
export class InitialLetterComponent implements ICellRendererAngularComp {
  value: string = '';
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
}

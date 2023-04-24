import { Component } from '@angular/core';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import { InitialLetterComponent } from './initial-letter/initial-letter.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mainContaienrData: any;
  constructor() {
    this.mainContaienrData = [
      {
        title: 'Product',
        columnDefs: [
          {
            field: 'productName',
            headerName: 'Name',
            filter: 'agSetColumnFilter',
          },
          {
            field: 'n',
            headerName: 'N',
            cellRenderer: InitialLetterComponent,
            cellRendererParams: function (params: any) {
              let value = params.data['productName']
                .trim()
                .charAt(0)
                .toUpperCase();
              return {
                value: value,
              };
            },
          },
          {
            field: 'edit',
            headerName: 'Edit',
            cellRenderer: CustomBtnComponent,
            cellRendererParams: { name: 'edit' },
            autoHeight: true,
          },
          {
            field: 'delete',
            headerName: 'Delete',
            cellRenderer: CustomBtnComponent,
            cellRendererParams: { name: 'delete' },
            autoHeight: true,
          },
        ],
        rowData: [
          { id: uuidv4(), productName: 'Laptop' },
          { id: uuidv4(), productName: 'Mouse' },
          { id: uuidv4(), productName: 'Desktop' },
        ],
        modalContent: [
          {
            type: 'text',
            name: 'Product Name',
            id: 'productName',
            placeholder: 'Enter Product Name',
          },
        ],
      },
      {
        title: 'Order',
        columnDefs: [
          {
            field: 'orderName',
            headerName: 'Name',
            filter: 'agSetColumnFilter',
          },
          {
            field: 'orderQuantity',
            headerName: 'Quantity',
            filter: 'agSetColumnFilter',
          },
          {
            field: 'edit',
            headerName: 'Edit',
            cellRenderer: CustomBtnComponent,
            cellRendererParams: { name: 'edit' },
            autoHeight: true,
          },
          {
            field: 'delete',
            headerName: 'Delete',
            cellRenderer: CustomBtnComponent,
            cellRendererParams: { name: 'delete' },
            autoHeight: true,
          },
        ],
        rowData: [
          { id: uuidv4(), orderName: 'Laptop', orderQuantity: 5 },
          { id: uuidv4(), orderName: 'Mouse', orderQuantity: 10 },
          { id: uuidv4(), orderName: 'Desktop', orderQuantity: 15 },
        ],
        modalContent: [
          {
            type: 'text',
            name: 'Order Name',
            id: 'orderName',
            placeholder: 'Enter Order Name',
          },
          {
            type: 'number',
            name: 'Order Quantity',
            id: 'orderQuantity',
            placeholder: 'Enter Order Quantity',
          },
        ],
      },
    ];
  }
}

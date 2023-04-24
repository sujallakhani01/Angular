import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  CellClickedEvent,
  GridApi,
  GridReadyEvent,
  IRowNode,
} from 'ag-grid-community';
import { v4 as uuidv4 } from 'uuid';

interface modalContentType {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

interface myObject {
  id: string;
}

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent {
  @Input() title: string = '';
  @Input() columnDefs: object[] = [];
  @Input() rowData: object[] = [];
  @Input() modalContent: modalContentType[] = [];
  iserror: boolean;
  errorMessage: string;
  gridApi: GridApi | undefined;
  allRowNodes: IRowNode[];
  btnText: string;
  modalTitle: string;
  modalVisible: boolean;
  rowId: string;
  @ViewChild('myForm') myForm!: NgForm;

  constructor() {
    this.iserror = false;
    this.errorMessage = '';
    this.allRowNodes = [];
    this.btnText = '';
    this.modalTitle = '';
    this.modalVisible = false;
    this.rowId = '';
  }

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
    this.gridApi = params.api;
    this.storeAllRowNodes();
  }

  storeAllRowNodes() {
    this.allRowNodes = [];
    this.gridApi?.forEachNode((node) => {
      this.allRowNodes.push(node);
    });
  }

  showModal(title: string, btnText: string) {
    this.modalVisible = true;
    this.modalTitle = title;
    this.btnText = btnText;
  }

  hideModal() {
    this.modalVisible = false;
  }

  addData(form: NgForm) {
    if (this.verifyData(form.value)) {
      let newData: myObject = form.value;
      newData.id = uuidv4();
      this.gridApi?.applyTransaction({ add: [newData] });
      this.gridApi?.forEachNode((node) => {
        if (node.data.id == newData.id) {
          this.allRowNodes.push(node);
        }
      });
      this.modalVisible = false;
    }
  }

  updateData(form: NgForm) {
    if (this.verifyData(form.value) && this.rowId !== '') {
      let rowNode: IRowNode = this.allRowNodes.filter((node) => {
        return node.data.id == this.rowId;
      })[0];
      let newData: myObject = form.value;
      newData.id = rowNode.data.id;
      rowNode?.setData(newData);
      this.gridApi?.refreshCells();
      if (rowNode) {
        for (let i = 0; i < this.allRowNodes.length; i++)
          if (this.allRowNodes[i].data.id === rowNode.id) {
            this.allRowNodes[i] = rowNode;
            break;
          }
      }
      this.modalVisible = false;
    }
  }

  verifyData(data: object): boolean {
    if (
      (data as { productName: string }).productName === '' ||
      ((data as { productName: string }).productName &&
        (data as { productName: string }).productName.replaceAll(' ', '')
          .length == 0)
    ) {
      this.iserror = true;
      this.errorMessage = 'Enter valid Product Name!!';
      return false;
    } else if (
      (data as { orderName: string }).orderName === '' ||
      ((data as { orderName: string }).orderName &&
        (data as { orderName: string }).orderName.replaceAll(' ', '').length ==
          0)
    ) {
      this.iserror = true;
      this.errorMessage = 'Enter valid Order Name!!';
      return false;
    } else if ((data as { orderQuantity: number }).orderQuantity <= 0) {
      this.iserror = true;
      this.errorMessage = 'Enter valid Order Quantity!!';
      return false;
    }
    this.iserror = false;
    this.errorMessage = '';
    return true;
  }

  onCellClicked(event: CellClickedEvent) {
    switch (event.colDef.field) {
      case 'edit':
        this.showModal('Edit Data', 'Update');
        this.rowId = event.data.id;
        setTimeout(() => {
          for (let key in event.data) {
            if (key != 'id')
              this.myForm.controls[key].setValue(event.data[key]);
          }
        }, 0);
        break;
      case 'delete':
        this.deleteRow(event.data);
        break;
    }
  }

  onSearch(event: Event) {
    let searchText = (<HTMLInputElement>event.target)?.value;
    this.gridApi?.setQuickFilter(searchText);
    this.gridApi?.onFilterChanged();
  }

  deleteRow(rowData: myObject) {
    if (this.gridApi && rowData !== null) {
      this.gridApi.applyTransaction({ remove: [rowData] });
      this.gridApi.refreshCells();
      for (let i = 0; i < this.allRowNodes.length; i++) {
        if (this.allRowNodes[i].data.id == rowData.id) {
          this.allRowNodes.splice(i, 1);
        }
      }
    }
  }

  storeData(event: string, form: NgForm) {
    switch (event) {
      case 'Add':
        this.addData(form);
        break;
      case 'Update':
        this.updateData(form);
    }
  }
}

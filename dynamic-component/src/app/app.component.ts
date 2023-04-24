// [{"type":"text","label":"Name","placeholder":"Enter Your Name","required":true},{"type":"radio","label":"Gender","placeholder":"Enter Your Name","checkarray":["male","female"],"required":true},{"type":"textarea","label":"Address","placeholder":"Enter Your Address","required":true}]

import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { InputComponent } from './input/input.component';
import { RadioCheckComponent } from './radio-check/radio-check.component';
import { TextareaComponent } from './textarea/textarea.component';
import { MainService } from './main.service';

interface fieldType {
  componentId?: string;
  type?: string;
  value?: string;
  class?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  min?: number;
  max?: number;
  name?: string;
  required?: boolean;
  checked?: boolean;
  checkarray?: string[];
  cols?: number;
  rows?: number;
  allowpastdate?: boolean;
}

interface infoType {
  componentId: string;
  label: string;
  value: string | string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: string;
  userInfo: infoType[];
  info: infoType[];
  showSubmit: boolean;
  isSubmitted: boolean;
  count: number;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  constructor(private mainService: MainService) {
    this.showSubmit = false;
    this.data =
      '[{"type":"text","label":"Name","placeholder":"Enter Your Name","required":true},{"type":"radio","label":"Gender","placeholder":"Enter Your Name","checkarray":["male","female"],"required":true},{"type":"textarea","label":"Address","placeholder":"Enter Your Address","required":true}]';
    this.userInfo = [];
    this.info = [];
    this.isSubmitted = false;
    this.count = 0;
  }
  render() {
    this.showSubmit = false;
    this.isSubmitted = false;
    this.userInfo = [];
    try {
      let json: fieldType[] | fieldType = JSON.parse(this.data);
      this.container.clear();
      this.count = 0;
      if (Array.isArray(json)) {
        for (let obj of json) {
          if (Object.keys(obj).length != 0) {
            this.generateElement(obj);
            this.count++;
          }
        }
      } else if (Object.keys(json).length != 0) this.generateElement(json);

      if (this.container.length > 0) this.showSubmit = true;
    } catch (e) {
    } finally {
      this.mainService.resetverify();
    }
  }
  generateElement(obj: fieldType): void {
    let component;
    switch (obj.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'date':
        component = this.container.createComponent(InputComponent);
        component.instance.type = obj.type;
        break;
      case 'checkbox':
      case 'radio':
        component = this.container.createComponent(RadioCheckComponent);
        component.instance.type = obj.type;
        break;
      case 'textarea':
        component = this.container.createComponent(TextareaComponent);
        component.instance.type = obj.type;
        break;
      default:
        component = this.container.createComponent(InputComponent);
        component.instance.type = 'text';
        break;
    }
    component.instance.componentId = component.instance.type + this.count;
    delete obj.type;
    this.setParams(component, obj);
    this.handleEvent(component);
  }
  setParams(
    component: ComponentRef<
      InputComponent | RadioCheckComponent | TextareaComponent
    >,
    obj: fieldType
  ) {
    for (let key in obj) {
      switch (key) {
        case 'value':
          if ('value' in component.instance)
            component.instance.value = obj[key] || '';
          break;
        case 'class':
          if ('class' in component.instance)
            component.instance.class = obj[key] || '';
          break;
        case 'id':
          if ('id' in component.instance)
            component.instance.id = obj[key] || '';
          break;
        case 'placeholder':
          if ('placeholder' in component.instance)
            component.instance.placeholder = obj[key] || '';
          break;
        case 'label':
          if ('label' in component.instance)
            component.instance.label = obj[key] || '';
          break;
        case 'checked':
          if ('checked' in component.instance)
            component.instance.checked = obj[key] || false;
          break;
        case 'min':
          if ('min' in component.instance)
            component.instance.min = obj[key] || 0;
          break;
        case 'max':
          if ('max' in component.instance)
            component.instance.max = obj[key] || Infinity;
          break;
        case 'name':
          if ('name' in component.instance)
            component.instance.name = obj[key] || '';
          break;
        case 'required':
          if ('required' in component.instance) {
            component.instance.required = obj[key] || false;
          }
          break;
        case 'checkarray':
          if ('checkarray' in component.instance)
            component.instance.checkarray = obj[key] || [];
          break;
        case 'cols':
          if ('cols' in component.instance)
            component.instance.cols = obj[key] || 30;
          break;
        case 'rows':
          if ('rows' in component.instance)
            component.instance.rows = obj[key] || 10;
          break;
        case 'allowpastdate':
          if ('allowpastdate' in component.instance)
            component.instance.allowpastdate = obj[key] || false;
          break;
      }
    }
  }
  handleEvent(
    component: ComponentRef<
      InputComponent | RadioCheckComponent | TextareaComponent
    >
  ) {
    if ('getData' in component.instance)
      component.instance.getData().subscribe({
        next: (data: infoType) => this.setInfo(data),
        error: (error: any) => console.error(error),
        complete: () => console.log('complete'),
      });
  }
  showInfo() {
    this.mainService.setclick(true);
    let isverify = this.mainService.getverify();
    this.mainService.resetverify();
    if (isverify) {
      this.info = structuredClone(this.userInfo);
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
    }
    this.mainService.setclick(false);
  }
  setInfo(data: infoType) {
    let flag = true;
    for (let obj of this.userInfo) {
      if (obj.componentId == data.componentId) {
        obj.value = data.value;
        flag = false;
        break;
      }
    }
    if (flag) {
      this.userInfo.push(data);
    }
  }
}

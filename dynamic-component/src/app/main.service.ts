import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface objType {
  componentId: string;
  type: string;
  value: string;
  min?: number | string;
  max?: number | string;
  required: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class MainService {
  isclick: boolean;
  isverify: boolean;
  clickSubject: Subject<boolean>;
  verifySubject: Subject<boolean>;
  // verificationArray: objType[];

  constructor() {
    this.isclick = false;
    this.isverify = true;
    this.clickSubject = new Subject();
    this.verifySubject = new Subject();
    // this.verificationArray = [];
  }

  setclick(value: boolean) {
    this.isclick = value;
    // console.log('From setClick ' + value);
    if (this.isclick) this.resetverify();
    this.clickSubject.next(this.isclick);
  }
  getverify() {
    // console.log(this.verificationArray);
    // for (let obj of this.verificationArray)
    //   if (!this.verify(obj)) {
    //     return false;
    //   }
    // return true;
    return this.isverify;
  }
  // setverify(value: objType) {
  //   this.verificationArray.push(value);
  // }
  setverify(value: boolean) {
    this.isverify = this.isverify && value;
  }
  resetverify() {
    // this.verificationArray = [];
    this.isverify = true;
  }

  // verify(obj: objType): boolean {
  //   const pattern = /\w+@\w+\.[a-z]{2,4}\.*[a-z]{0,2}/;
  //   if (
  //     obj.required &&
  //     (obj.value?.length == 0 || obj.value?.replaceAll(' ', '').length == 0)
  //   ) {
  //     return false;
  //   } else if (obj.type == 'email' && !pattern.test(obj.value)) return false;
  //   else if (
  //     obj.type == 'number' &&
  //     ((obj.max !== undefined && obj.value > obj.max) ||
  //       (obj.min !== undefined && obj.value < obj.min))
  //   )
  //     return false;

  //   return true;
  // }
}

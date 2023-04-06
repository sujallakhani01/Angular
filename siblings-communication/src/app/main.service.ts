import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  subject1: Subject<number>;
  subject2: Subject<number>;
  subject3: Subject<number>;
  subject4: Subject<number>;
  constructor() {
    this.subject1 = new Subject();
    this.subject2 = new Subject();
    this.subject3 = new Subject();
    this.subject4 = new Subject();
  }
  setSubject1(data: number): void {
    this.subject1.next(data);
  }
  setSubject2(data: number): void {
    this.subject2.next(data);
  }
  setSubject3(data: number): void {
    this.subject3.next(data);
  }
  setSubject4(data: number): void {
    this.subject4.next(data);
  }
}

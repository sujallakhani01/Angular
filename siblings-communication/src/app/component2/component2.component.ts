import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements OnInit {
  count1: number;
  count2: number;
  count3: number;
  count4: number;
  constructor(private mainService: MainService) {
    this.count1 = 0;
    this.count2 = 0;
    this.count3 = 0;
    this.count4 = 0;
  }
  ngOnInit(): void {
    this.mainService.subject1.subscribe({
      next: (data) => {
        this.count1 = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
    this.mainService.subject3.subscribe({
      next: (data) => {
        this.count3 = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
    this.mainService.subject4.subscribe({
      next: (data) => {
        this.count4 = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  setCount2() {
    this.mainService.setSubject2(++this.count2);
  }
}

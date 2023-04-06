import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
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
  ngOnInit() {
    this.mainService.subject2.subscribe({
      next: (data) => {
        this.count2 = data;
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
  setCount1() {
    this.mainService.setSubject1(++this.count1);
  }
}

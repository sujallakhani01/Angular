import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  names: string[];
  constructor(private mainService: MainService) {
    this.names = this.mainService.arr;
  }
  ngOnInit() {
    this.mainService.subject.pipe(debounceTime(2000)).subscribe({
      next: (names: string[]) => {
        this.setList(names);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  setList(names: string[]): void {
    this.names = names;
  }
}

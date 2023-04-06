import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  subject: Subject<string[]>;
  arr: string[];
  constructor() {
    this.subject = new Subject<string[]>();
    this.arr = [
      'Sujal Lakhani',
      'Bhavik Prajapati',
      'Deep Patel',
      'Jayraj Chauhan',
      'Vivek Kotecha',
      'Yash Dand',
      'Rhythm Dholiya',
      'Mohil Patel',
      'Adnan Lokhadwala',
      'Priya Intvala',
      'Dhruvi Kundariya',
      'Vivek Kotecha',
      'Dipesh Mandanka',
      'Savan Aghera',
      'Aditya Kasralkar',
      'Megha Dhabali',
      'Safi Shaikh',
      'Deep Joshi',
      'Jay Joshi',
      'Ronak Kotiya',
      'Bhavik Prajapati',
      'Dhruvil Patel',
      'Ishan Parikh',
      'Parth Thakkar',
      'Malay Delwadiya',
      'Ravindra Singh',
      'Pradhuman Sarkar',
      'Akshat Sitapara',
      'Shruti Lad',
      'Arya Sheth',
      'Jaydeep Dabhi',
      'Jaynish Mandaliya',
      'Parshwa Chudasama',
      'Ranjit Ratiya',
    ];
  }

  searchValue(data: string) {
    let result: string[] = [];
    for (let word of this.arr) {
      let index = word.toLowerCase().indexOf(data.toLowerCase());
      if (index >= 0) {
        let matchedWord = word.slice(index, index + data.length);
        word = word.replaceAll(
          matchedWord,
          `<span class="highlight">${matchedWord}</span>`
        );
        result.push(word);
      }
    }

    this.subject.next(result);
  }
}

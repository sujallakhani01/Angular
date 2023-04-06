import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
})
export class ShowDataComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() gender: string = '';
  @Input() hobbies: string = '';
  @Input() nationality: string = '';
  @Input() birthdate: string = '';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private name: string = '';
  private email: string = '';
  private gender: string = 'Male';
  private hobbies: string[] = [];
  private nationality: string = 'Indian';
  private birthdate: string = '';
  private format: string = 'indian';
  submitted: boolean = false;
  newData: object = {
    name: '',
    email: '',
    gender: '',
    hobbies: [],
    natioanality: '',
    birthdate: '',
  };

  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  getGender(): string {
    return this.gender;
  }
  setGender(gender: string): void {
    this.gender = gender;
  }
  getHobbies(): string[] {
    return this.hobbies;
  }
  setHobbies(hobbies: string[]): void {
    this.hobbies = hobbies;
  }
  getNationality(): string {
    return this.nationality;
  }
  setNationality(nationality: string): void {
    console.log('Hello');
    this.nationality = nationality;
  }
  getBirthdate(): string {
    return this.birthdate;
  }
  setBirthdate(date: string): void {
    this.birthdate = date;
  }
  getDateFormat(): string {
    return this.format;
  }
  setDateFormat(format: string): void {
    this.format = format;
  }
  updateDateFormat(format: string): void {
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if (format == 'indian') {
      this.birthdate = this.birthdate.split('-').reverse().join('/');
    } else if (format == 'british') {
      let dateArray: string[] = this.birthdate.split('-').reverse();
      this.birthdate =
        dateArray[0] + ' ' + months[+dateArray[1] - 1] + ', ' + dateArray[2];
    }
  }

  storeData(isclick: boolean) {
    if (isclick) {
      this.updateDateFormat(this.getDateFormat());
      this.submitted = true;
      this.newData = {
        name: this.getName(),
        email: this.getEmail(),
        gender: this.getGender(),
        hobbies: this.getHobbies(),
        natioanality: this.getNationality(),
        birthdate: this.getBirthdate(),
      };

      let appData: object[] = JSON.parse(
        localStorage.getItem('appData') || '[]'
      );
      appData.push(this.newData);
      localStorage.setItem('appData', JSON.stringify(appData));
      console.log(appData);
    }
  }
}

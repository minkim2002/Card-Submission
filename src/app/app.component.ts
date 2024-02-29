import { Component } from '@angular/core';

// User interface
export interface User {
  name: string;
  age: number | null;
  birthYear: number | null;
  isStudent: boolean | null;
  school: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'card-app';
  // years from 1901 to 2024 to choose from
  years: number[] = Array.from({ length: 124 }, (_, index) => 2024 - index);


  // User components with default values
  user: User = {
    name: '',
    age: null,
    birthYear: null,
    isStudent: null,
    school: '',

  };

  // List of user cards
  userCards: User[] = [];

  // When the name, both the age and the birthyear, and the student status are filled, push the card to the list
  addCard() {
    if (this.user.name && this.user.age !== null && this.user.age >= 1 && this.user.age <= 125 && this.user.birthYear != undefined && this.user.isStudent !== null) {
      this.userCards.push({ ...this.user });
      this.resetForm();
    }
  }

  //reset the form when the new card is added
  resetForm() {
    this.user = {
      name: '',
      age: null,
      birthYear: null,
      isStudent: null,
      school: '',
    };
  }
}

import { Component, Input } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-card',
  // Template for the card, how it will be visualized in the card list
  template: `
    <div class="card">
      <h3>{{ user.name }}</h3>
      <p>Age: {{ user.age || 'N/A' }}</p>
      <p>Birth Year: {{ user.birthYear || 'N/A' }}</p>
      <p>Is Student: {{ user.isStudent ? 'Yes' : 'No' }}</p>
      <p *ngIf="user.isStudent">School: {{ user.school || 'N/A' }}</p>
    </div>
  `,

  // Basic designs for the card
  styles: [`
    .card {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
      width: 200px;
    }
  `]
})

export class CardComponent {
  @Input() user!: User;
}
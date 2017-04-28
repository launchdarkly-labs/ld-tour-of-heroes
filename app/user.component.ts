import { Component } from '@angular/core';
import { LaunchDarklyService } from './launchdarkly.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  template: `
    <h4>Select a user:
      <select (change)="changeUser($event.target.value)">
        <option *ngFor="let user of users">{{user}}</option>
      </select>
    <h4>

  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users = ['Anonymous', 'Arnold', 'Admin']
  user = this.users[0]

  constructor(private ld: LaunchDarklyService) {}

  changeUser(user) {
    this.ld.changeUser(user);
  }
}

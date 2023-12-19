import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {

  @Input() name = "Maxi";
  @Input() img = '/';
  @Input() description = "description";
}

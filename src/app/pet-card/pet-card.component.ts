import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent implements OnInit {

  @Input() text: string = '';
  @Input() img: string = '';

  constructor() {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

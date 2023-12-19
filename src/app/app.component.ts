import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PetCardComponent } from "./pet-card/pet-card.component";
import { ProposalsComponent } from "./proposals/proposals.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, PetCardComponent, ProposalsComponent]
})
export class AppComponent {
  title = 'first-angular-project';
  postTexts = [
    "erster Text",
    "zweiter Text"
  ]

  postImages = [
    "assets/img/pet-images/cat-1647775_1280.jpg",
    "assets/img/pet-images/cat-1192026_1280.jpg"
  ]
}

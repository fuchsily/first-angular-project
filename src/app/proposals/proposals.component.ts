import { Component, OnInit } from '@angular/core';
import { ProfileRowComponent } from "../profile-row/profile-row.component";

@Component({
    selector: 'app-proposals',
    standalone: true,
    templateUrl: './proposals.component.html',
    styleUrl: './proposals.component.scss',
    imports: [ProfileRowComponent]
})
export class ProposalsComponent implements OnInit {
    names = ["Marius", "Lennard", "Simba", "Lissi"];
    texts = ["2 Jahre", "funny guy", "mag Mäuse", "mag Sonne"];
    images = ["assets/img/pet-images/cristian-castillo-73pyV0JJOmE-unsplash.jpg",
                "assets/img/pet-images/jamie-street-UtrE5DcgEyg-unsplash.jpg"]
    constructor() {}
    
    ngOnInit(): void {
    }

}

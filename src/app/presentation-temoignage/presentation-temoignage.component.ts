import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-presentation-temoignage',
  templateUrl: './presentation-temoignage.component.html',
  styleUrl: './presentation-temoignage.component.css'
})
export class PresentationTemoignageComponent {
  constructor(config: NgbCarouselConfig){
    config.interval = 6000;
  }
}

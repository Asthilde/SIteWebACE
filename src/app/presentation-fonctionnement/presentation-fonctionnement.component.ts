import { Component } from '@angular/core';
import { SectionPresentation } from '../section-presentation';

@Component({
  selector: 'app-presentation-fonctionnement',
  templateUrl: './presentation-fonctionnement.component.html',
  styleUrl: './presentation-fonctionnement.component.css'
})
export class PresentationFonctionnementComponent {
  listeOutilsPresentes : SectionPresentation[] = [
    {
      titre: "Nolio",
      image: "../favicon.ico",
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Non enim praesent elementum facilisis leo vel fringilla est. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.",
      lienPage: "none"
    },
    {
      titre: "Outil 2",
      image: "../favicon.ico",
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Non enim praesent elementum facilisis leo vel fringilla est. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.",
      lienPage: "none"
    }
  ]
}

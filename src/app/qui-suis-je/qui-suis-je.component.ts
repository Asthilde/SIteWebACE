import { Component } from '@angular/core';
import { SectionPresentation } from '../section-presentation';
import { Experience } from '../experience';

@Component({
  selector: 'app-qui-suis-je',
  templateUrl: './qui-suis-je.component.html',
  styleUrl: './qui-suis-je.component.css'
})
export class QuiSuisJeComponent {
  sectionPresentee: SectionPresentation = 
    {
      titre: "Qui suis-je ?",
      image: "../favicon.ico",
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Non enim praesent elementum facilisis leo vel fringilla est. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.",
      lienPage: "none"
    };
    experience_pro: Experience = {
      titre: "Mon expérience professionnelle",
      presentation: "Lorem ipsum .....................................................................",
      titre_liste: "Faits marquants",
      faits: ["Résultat 1", "Résultat 2", "Résultat 3"]
    };
    experience_perso: Experience = {
      titre: "Mon expérience d'athlète",
      faits: ["Résultat 1", "Résultat 2", "Résultat 3"]
    }
}

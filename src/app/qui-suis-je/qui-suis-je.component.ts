import { Component, inject, OnInit } from '@angular/core';
import { SectionPresentation } from '../section-presentation';
import { Experience } from '../experience';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-qui-suis-je',
  templateUrl: './qui-suis-je.component.html',
  styleUrl: './qui-suis-je.component.css'
})
export class QuiSuisJeComponent implements OnInit {
  
  // donneesService: DonneesService = inject(DonneesService);
  sectionPresentee!: SectionPresentation;
  section?: SectionPresentation;
  experiencePro!: Experience;
  experiencePerso!: Experience;

  constructor(private donneesService: DonneesService){}

  ngOnInit(): void {
      this.section = this.donneesService.getSectionByTitle("Qui je suis ?");
      this.experiencePro = this.donneesService.getExpePro();
      this.experiencePerso = this.donneesService.getExpePerso();
      if(this.section != undefined) {
        this.sectionPresentee = this.section;
      }
  }

  
    /*{
      titre: "Qui suis-je ?",
      image: "../favicon.ico",
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Non enim praesent elementum facilisis leo vel fringilla est. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.",
      lienPage: "none"
    };*/

}

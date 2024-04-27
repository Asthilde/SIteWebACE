import { Component, OnInit, inject } from '@angular/core';
import { SectionPresentation } from '../section-presentation';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {

  listeSectionPresentee: SectionPresentation[] = [];
  // donneesService: DonneesService = inject(DonneesService);

  constructor(private donneesService: DonneesService){}

  ngOnInit(): void {
    this.listeSectionPresentee = this.donneesService.getSections();
}

}

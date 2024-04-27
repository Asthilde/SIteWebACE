import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AvisClient } from '../avis-client';
import { DonneesService } from '../donnees.service';


@Component({
  selector: 'app-presentation-temoignage',
  templateUrl: './presentation-temoignage.component.html',
  styleUrl: './presentation-temoignage.component.css'
})
export class PresentationTemoignageComponent implements OnInit {
  listeAvis: AvisClient[] = [];

  constructor(config: NgbCarouselConfig, private donneesService: DonneesService){
    config.interval = 6000;
  }

  ngOnInit(): void {
      this.listeAvis = this.donneesService.getTemoignages();
  }
}

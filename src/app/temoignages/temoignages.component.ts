import { Component, OnInit } from '@angular/core';
import { PresentationTemoignageComponent } from '../presentation-temoignage/presentation-temoignage.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AvisClient } from '../avis-client';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-temoignages',
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css'
})
export class TemoignagesComponent implements OnInit {
  listeAvis: AvisClient[] = [];

  constructor(config: NgbCarouselConfig, private donneesService: DonneesService){
    config.interval = 6000;
  }

  ngOnInit(): void {
      this.listeAvis = this.donneesService.getTemoignages();
  }
  
}

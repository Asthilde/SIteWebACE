import { Component, inject, OnInit } from '@angular/core';
import { AvisClient } from '../avis-client';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-affichage-avis',
  templateUrl: './affichage-avis.component.html',
  styleUrl: './affichage-avis.component.css'
})
export class AffichageAvisComponent implements OnInit {

  listeAvis: AvisClient[] = [];
  // donneesService: DonneesService = inject(DonneesService);

  constructor(private donneesService: DonneesService){}
  ngOnInit(): void {
      this.listeAvis = this.donneesService.getTemoignages();
  }
}

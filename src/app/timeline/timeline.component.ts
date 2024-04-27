import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  titreEtapes : string[] = [
    "Prise de contact",
    "Définition de vos objectifs",
    "Mise en place de la planification",
    "Suivi régulier"
  ]

  descriptionEtapes: string[] = [
    "L’athlète me contacte par mail en précisant sa demande (suivi annuel, mensuel, pour un objectif précis…)",
    "Nous définissons ensemble l’offre qui convient le mieux à leurs besoins ainsi qu'à leurs objectifs.",
    "Je mets en place une planification en fonction du temps hebdomadaire disponible pour l’athlète et de ses objectifs",
    "L’athlète suit les entraînements et j’analyse ses séances avant d’adapter les suivantes en fonction des résultats"
  ]

  getTitre(etape: number): string {
    return this.titreEtapes[etape];
  }

  getDescription(etape: number): string {
    return this.descriptionEtapes[etape];
  }

}

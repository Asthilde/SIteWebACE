import { Component, inject, OnInit } from '@angular/core';
import { OffrePresentation } from '../offre-presentation';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-affichage-offres-detail',
  templateUrl: './affichage-offres-detail.component.html',
  styleUrl: './affichage-offres-detail.component.css'
})
export class AffichageOffresDetailComponent implements OnInit{

  // donneesService: DonneesService = inject(DonneesService);
  listeOffrePresentee: OffrePresentation[] = [];
  offreSpeciale!: OffrePresentation;

  constructor(private donneesService: DonneesService){}

  ngOnInit(): void {
      this.listeOffrePresentee = this.donneesService.getOffres();
      this.offreSpeciale = this.donneesService.getOffreSpeciale();
  }
    /*{
      titre: 'Offre Découverte',
      public: "Sportif débutant dans la pratique de sports d'endurance ou découvrant le coaching",
      resume: "Cette offre est un premier pas pour découvrir les effets du coaching avant de se lancer dans des objectifs plus élevés !",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une définition commune de vos objectifs et paramètres pour les atteindre, un plan d'entraînement communiqué une fois par mois via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp une fois par semaine et un contact téléphonique une fois par mois pour adapter le plan.",
      tarifs: [70, 200, 380, 750]
    },
    {
      titre: 'Offre Premium',
      public: "Sportif compétiteur souhaitant progresser dans sa pratique ou se préparer pour un objectif spécifique",
      resume:  "Cette offre s’adresse aux personnes qui veulent avoir un retour régulier sur leur pratique mais qui ne font pas de la performance une priorité. Elle est idéale si vous souhaitez avoir un entrainement structuré et régulier mais que le sport n’est pas votre unique priorité !",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une définition commune de vos objectifs et paramètres pour les atteindre, un plan d'entraînement communiqué une fois par mois via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp quotidien, un contact téléphonique une fois par semaine, une analyse hebdomadaire des données d'entraînement qui peut entraîner des modifications du plan d'entraînement chaque mois.",
      tarifs: [99, 285, 540, 1000]
    },
    {
      titre: "Offre Expert",
      public: "Sportif compétiteur et aguerri qui vise la performance sportive",
      resume:  "Que ce soit pour atteindre un objectif personnel ou dans le but de performer sur des courses et d'aller chercher les victoires lors des courses. Je propose une analyse globale de la performance et la mise en place de tous les facteurs pour l’amélioration de la performance. Cette offre peut aussi après un accord commun amener à un suivi personnel lors des objectifs majeurs de la saison.",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une rencontre pour définir vos objectifs et moyens pour les atteindre, un plan d'entraînement communiqué chaque semaine via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp à volonté, un contact téléphonique régulier selon les besoins, une analyse quotidienne des données d'entraînement qui peut entraîner des modifications du plan d'entraînement en fonction des ressentis et de votre emploi du temps et un suivi en présentiel lors de vos principaux objectifs (à définir).",
      tarifs: [119, 350, 640, 1299]
    }
  ];*/

}

import { Component, inject, OnInit } from '@angular/core';
import { OffrePresentation } from '../offre-presentation';
import { Router } from '@angular/router';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-affichage-offres',
  templateUrl: './affichage-offres.component.html',
  styleUrl: './affichage-offres.component.css'
})
export class AffichageOffresComponent implements OnInit{

  // donneesService: DonneesService = inject(DonneesService);
  listeOffrePresentee: OffrePresentation[] = [];
  offreSpeciale!: OffrePresentation;

  constructor(private router: Router, private donneesService: DonneesService){}

  ngOnInit(): void {
      this.listeOffrePresentee = this.donneesService.getOffres();
      this.offreSpeciale = this.donneesService.getOffreSpeciale();
  }

  afficherOffres(){
      this.router.navigateByUrl('offres');
  }
    /*{
      titre: 'Offre Découverte',
      resume: "Cette offre s’adresse aux sportifs débutants qui ont pour projet de découvrir la pratique des sports d’endurance. Elle est un premier pas pour découvrir les effets du coaching avant de se lancer dans des objectifs plus élevés !",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une définition commune de vos objectifs et paramètres pour les atteindre, un plan d'entraînement communiqué une fois par mois via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp une fois par semaine et un contact téléphonique une fois par mois pour adapter le plan.",
      tarifs: [70, 200, 380, 750]
    },
    {
      titre: 'Offre Premium',
      resume:  "Cette offre s’adresse aux compétiteurs qui ont pour objectif de progresser de manière régulière et qui veulent avoir un retour régulier sur leur pratique mais qui ne font pas de la performance une priorité. Elle est idéale si vous souhaitez avoir un entrainement structuré et régulier mais que le sport n’est pas votre unique priorité !",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une définition commune de vos objectifs et paramètres pour les atteindre, un plan d'entraînement communiqué une fois par mois via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp quotidien, un contact téléphonique une fois par semaine, une analyse hebdomadaire des données d'entraînement qui peut entraîner des modifications du plan d'entraînement chaque mois.",
      tarifs: [99, 285, 540, 1000]
    },
    {
      titre: "Offre Expert",
      resume:  "Cette offre s’oriente vers un public de sportifs aguerris qui ont pour objectif de mettre tout en œuvre pour la performance. Que ce soit pour atteindre un objectif personnel ou dans le but de performer sur des courses et d'aller chercher les victoires lors des courses. Je propose une analyse globale de la performance et la mise en place de tous les facteurs pour l’amélioration de la performance. Cette offre peut aussi après un accord commun amener à un suivi personnel lors des objectifs majeurs de la saison.",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une rencontre pour définir vos objectifs et moyens pour les atteindre, un plan d'entraînement communiqué chaque semaine via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp à volonté, un contact téléphonique régulier selon les besoins, une analyse quotidienne des données d'entraînement qui peut entraîner des modifications du plan d'entraînement en fonction des ressentis et de votre emploi du temps et un suivi en présentiel lors de vos principaux objectifs (à définir).",
      tarifs: [119, 350, 640, 1299]
    }
  ];*/

    /*titre: "Offre spéciale",
    resume:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Non enim praesent elementum facilisis leo vel fringilla est. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.",
    tarifs: [],
  };*/
}

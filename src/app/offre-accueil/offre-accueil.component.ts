import { Component, Input } from '@angular/core';
import { OffrePresentation } from '../offre-presentation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre-accueil',
  templateUrl: './offre-accueil.component.html',
  styleUrl: './offre-accueil.component.css'
})
export class OffreAccueilComponent {
  @Input() offrePresentee! : OffrePresentation;
  constructor(private router: Router){}  

  afficherOffres(){
      this.router.navigateByUrl('offres');
  }

}

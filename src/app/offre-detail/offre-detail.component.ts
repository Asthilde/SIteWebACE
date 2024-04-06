import { Component, Input } from '@angular/core';
import { OffrePresentation } from '../offre-presentation';

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styleUrl: './offre-detail.component.css'
})
export class OffreDetailComponent {
  @Input() offrePresentee! : OffrePresentation;
}

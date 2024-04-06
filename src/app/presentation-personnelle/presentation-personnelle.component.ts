import { Component, Input } from '@angular/core';
import { SectionPresentation } from '../section-presentation';

@Component({
  selector: 'app-presentation-personnelle',
  templateUrl: './presentation-personnelle.component.html',
  styleUrl: './presentation-personnelle.component.css'
})
export class PresentationPersonnelleComponent {
  @Input() sectionPresentee! : SectionPresentation;
}

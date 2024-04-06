import { Component, Input } from '@angular/core';
import { SectionPresentation } from '../section-presentation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentation-outils',
  templateUrl: './presentation-outils.component.html',
  styleUrl: './presentation-outils.component.css'
})
export class PresentationOutilsComponent {
  @Input() outilPresente! : SectionPresentation;
}

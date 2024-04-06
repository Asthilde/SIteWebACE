import { Component, Input } from '@angular/core';
import { Experience } from '../experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  @Input() experiencePresentee! : Experience;
}

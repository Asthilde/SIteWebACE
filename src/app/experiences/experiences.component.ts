import { Component, Input } from '@angular/core';
import { Experience } from '../experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  @Input() experiencePresentee! : Experience;

  isValidIndex(idx : number) : boolean{
    if(this.experiencePresentee.presentation_details != undefined){
      if(this.experiencePresentee.presentation_details[idx] != undefined)
        return true;
    }
    return false;
  }
}

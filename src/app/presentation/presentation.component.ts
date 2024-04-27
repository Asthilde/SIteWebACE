import { Component, Input } from '@angular/core';
import { SectionPresentation } from '../section-presentation';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  @Input() sectionPresentee! : SectionPresentation;
  constructor(private router: Router){}  

  afficherPage(page: string | undefined){
    if(page != undefined)
      this.router.navigateByUrl(page);
  }
}

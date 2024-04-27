import { Component, inject, OnInit } from '@angular/core';
import { DonneesService } from '../donnees.service';
import { Experience } from '../experience';

@Component({
  selector: 'app-experience-pro',
  templateUrl: './experience-pro.component.html',
  styleUrl: './experience-pro.component.css'
})
export class ExperienceProComponent implements OnInit {

  experiencePro!: Experience;

  // donneesService: DonneesService = inject(DonneesService);

  constructor(private donneesService: DonneesService){}

  ngOnInit(): void {
      this.experiencePro = this.donneesService.getExpePro();
  }
  
  // titre: string = "Mon expérience professionnelle";
}

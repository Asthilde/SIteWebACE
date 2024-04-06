import { Component, Input } from '@angular/core';
import { AvisClient } from '../avis-client';

@Component({
  selector: 'app-avis-client',
  templateUrl: './avis-client.component.html',
  styleUrl: './avis-client.component.css'
})
export class AvisClientComponent {
  @Input() avisPresente! : AvisClient;
}

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AffichageOffresComponent } from './affichage-offres/affichage-offres.component';
import { OffreAccueilComponent } from './offre-accueil/offre-accueil.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
import { PresentationTemoignageComponent } from './presentation-temoignage/presentation-temoignage.component';
import { ContactComponent } from './contact/contact.component';
import { EndPageComponent } from './end-page/end-page.component';
import { OffresComponent } from './offres/offres.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PresentationOutilsComponent } from './presentation-outils/presentation-outils.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';
import { AffichageOffresDetailComponent } from './affichage-offres-detail/affichage-offres-detail.component';
import { PresentationFonctionnementComponent } from './presentation-fonctionnement/presentation-fonctionnement.component';
import { AvisClientComponent } from './avis-client/avis-client.component';
import { AffichageAvisComponent } from './affichage-avis/affichage-avis.component';
import { QuiSuisJeComponent } from './qui-suis-je/qui-suis-je.component';
import { PresentationPersonnelleComponent } from './presentation-personnelle/presentation-personnelle.component';
import { DiplomesComponent } from './diplomes/diplomes.component';
import { ExperienceProComponent } from './experience-pro/experience-pro.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { EmailService } from './email.service';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    NavbarComponent,
    AccueilComponent,
    AffichageOffresComponent,
    OffreAccueilComponent,
    TemoignagesComponent,
    PresentationTemoignageComponent,
    ContactComponent,
    EndPageComponent,
    OffresComponent,
    TimelineComponent,
    PresentationOutilsComponent,
    OffreDetailComponent,
    AffichageOffresDetailComponent,
    PresentationFonctionnementComponent,
    AvisClientComponent,
    AffichageAvisComponent,
    QuiSuisJeComponent,
    PresentationPersonnelleComponent,
    DiplomesComponent,
    ExperienceProComponent,
    ExperiencesComponent,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresComponent } from './offres/offres.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuiSuisJeComponent } from './qui-suis-je/qui-suis-je.component';
import { PageContactComponent } from './page-contact/page-contact.component';

const routes: Routes = [
  { path: 'offres', pathMatch: 'full', component: OffresComponent},
  { path: 'accueil', pathMatch: 'full', component: AccueilComponent},
  { path: 'qui-suis-je', pathMatch: 'full', component: QuiSuisJeComponent},
  { path: 'contact', pathMatch: 'full', component: PageContactComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'pricing-component', component: PricingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

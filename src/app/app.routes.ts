import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'restaurants', component: RestaurantsComponent}
];


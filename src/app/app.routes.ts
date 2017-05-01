import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'restaurants', component: RestaurantsComponent}
];


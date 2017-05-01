//Angular
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { rootRouterConfig } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Vendor
import 'hammerjs';

//Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

//Shared
import { PubSub } from './shared/PubSub';
import { RestaurantsService } from './services/restaurants.service';
import { ViewModel } from './shared/ViewModel';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		RestaurantComponent,
		RestaurantsComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: true })
	],
	providers: [
		PubSub,
		RestaurantsService,
		ViewModel
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}

import { Component } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
    selector: 'restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent{
    restaurants: Array<any>;
    constructor(private restaurantsService: RestaurantsService){
        this.restaurants = restaurantsService.getRestaurants().slice(0, 3);
    }
}
import { Component } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';
import { PubSub } from '../shared/PubSub';

@Component({
    selector: 'restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent{
    restaurants: Array<any>;
    constructor(private restaurantsService: RestaurantsService, private pubSub: PubSub){
        this.restaurants = restaurantsService.getRestaurants().slice(0, 3);
    }

    selectRestaurant(event){
        this.pubSub.fire('selectedrestaurant', event);
    }
}
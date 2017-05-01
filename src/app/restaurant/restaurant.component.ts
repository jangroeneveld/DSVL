import { Component, OnInit } from '@angular/core';
import { PubSub } from '../shared/PubSub';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
    selector: 'restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent{
    restaurant;
    constructor(private pubSub: PubSub, private restaurantsService: RestaurantsService){
        this.restaurant = {
        story: "Lorem ipsum.",
            ratings: {
                price: 25.30,
                priceQuality: 4.2,
                variation: 3.9,
                service: 2.3,
                atmosphere: 1.2
            }
        };
        this.pubSub.on('selectedrestaurant', this.getDetails.bind(this))
    }

    getDetails(data){
        console.log(this);
        var rest = this.restaurantsService.getRestaurantDetails(data.id);
        console.log(this.restaurant, rest);
        this.restaurant = rest;
    }
}
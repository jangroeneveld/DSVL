import { Injectable } from '@angular/core'

@Injectable()
export class ViewModel{
    chosenAmenity = {
        story: "Lorem ipsum.",
        ratings: {
            price: 25.30,
            priceQuality: 4.2,
            variation: 3.9,
            service: 2.3,
            atmosphere: 1.2
        }
    };
}
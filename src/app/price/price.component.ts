// price.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  price: number | undefined = 59.99; // Initialize the price property

  // You can add other properties or methods here if needed
}

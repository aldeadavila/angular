import { Component, OnInit } from '@angular/core';
import { RestService} from './../rest.service';
import { Price } from './prices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  prices: Price[] = [];

  constructor(
    public restService: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.restService.getPrices().subscribe(prices => this.prices = prices);
    
  }


}

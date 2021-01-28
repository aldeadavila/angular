import { Component, OnInit } from '@angular/core';
import { RestService, Prices } from '../rest.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  prices: Prices[] = [];

  constructor(
    public restService: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.restService.getPrices();
  }


}

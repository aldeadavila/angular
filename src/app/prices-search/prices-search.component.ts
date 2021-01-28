import { Component, OnInit } from '@angular/core';
import { RestService, Prices } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prices-search',
  templateUrl: './prices-search.component.html',
  styleUrls: ['./prices-search.component.css']
})
export class PricesSearchComponent implements OnInit {

  prices: Prices[] = [];

  constructor(
    public rest: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

 

}

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePrice } from './safePrice.interface';
import { Price } from './prices/prices';

const endpoint = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
    console.log("Servicio inyectado")
   }
  
  getPrices(): Observable<Price[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Price[]>(endpoint + 'prices');
  }

  searchPrices(productId: number, brandId: number, date: string): Observable<any> {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json').set('Access-Control-Allow-Origin', '*');
    return this.http.get<Price[]>(endpoint + 'prices/' + productId + '/' + brandId + '/' + date).pipe(
      map(data => {
        const mySearchPrices = data.map(mySearchPrices => this.searchPrices(productId,brandId,date));
        console.log(mySearchPrices);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}


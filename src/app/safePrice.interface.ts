import { SafeHtml } from '@angular/platform-browser';

export interface SafePrice {
    'id': SafeHtml;
    'brandId': SafeHtml;
    'startDate': SafeHtml;
    'endDate': SafeHtml;
    'priceList': SafeHtml;
    'productId': SafeHtml;
    'priority': SafeHtml;
    'price': SafeHtml;
    'currency': SafeHtml;
}
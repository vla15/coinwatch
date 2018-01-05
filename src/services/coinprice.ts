import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinPriceService {

    constructor(private http: HttpClient) {}

    public getCoinData(): Observable<any> {
        let url = '../data/dummydata.json';
        return this.http.get(url);
    }
}
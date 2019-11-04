import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Http, Headers, Response, HttpModule, URLSearchParams, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
    public APIBASE = 'http://localhost:58712/api/Rewards';
    subject: Subject<any>;

    constructor(private http: Http) {
    this.subject = new Subject();
  }

    getCustomers(): Observable<any> {
    const url = this.APIBASE;

    return this.http.get(url, {
    });
  }
  getMonthlyRewards(months: any): Observable<any> {
    const url = this.APIBASE + "/months";
    let response = [];
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    months.forEach(month => {
      response.push(this.http.post(url, JSON.stringify(month), options).pipe(map((res: any) => res.json())));
    });
    return forkJoin(response);
  }
}

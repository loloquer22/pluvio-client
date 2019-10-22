import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Relevepluie } from '../models/relevepluie';
import { environment } from 'environments/environment.prod';

//const endpoint = environment.apiUrl;
// const endpoint = environment.apiUrl + '/pluvio/';
 const endpoint = '/pluvio/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

const headers = new HttpHeaders()
            

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
}
  
  // List Year
  getListYear(): Observable<any> {
    return this.http.get(endpoint + 'listYearRelevepluie').pipe(
    map(this.extractData));
}

  getValuesByYear(): Observable<any> {
    return this.http.get(endpoint + 'byYearRelevepluie').pipe(
    map(this.extractData));
  }

  getLastValues(): Observable<any> {
    return this.http.get(endpoint + 'lastValueRelevepluie').pipe(
      map(this.extractData));
  }
  
  getValueByDayForMonthByYear(annee: any , mois: any): Observable<any> {
      console.log( "getValueByDayForMonthByYear annee: " + annee + "," + "mois: "+ mois);
      return this.http.get(endpoint + 'listValueByDayForMonthByYear/' + annee + '/'+  mois  ).pipe(
        map(this.extractData));
    }

  addRelevepluie(relevepluie): Observable<Relevepluie> {
    console.log( relevepluie);
    return this.http.post<Relevepluie>(endpoint + 'addRelevepluie', 
    relevepluie
    );
  }

  getRelevepluieByDate(date: String) :Observable<any> {
    return this.http.get(endpoint + 'relevepluieByDate/'  + date );
  }

  getTotalByMonthByYear(year: string): Observable<any> {
    return this.http.get(endpoint + 'totalByMonthByYear/'  + year ).pipe(
      map(this.extractData));
  }

   updateRelevepluie(  value: any): Observable<Object> {
    return this.http.put(endpoint + 'updateRelevepluie/', value);
  }

  deleteRelevepluie(id: number): Observable<any> {
    return this.http.delete(endpoint + 'deleteRelevepluie/'  + id);
  }
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
   // Get all values by years
  // getByYearRelevepluies(): Observable < Listyear > {
   // return this.http.get("http://192.168.1.98:8080/pluvio/listYear" )
  //  .map((response: Response) => response.json());
  // }
  
  
  // https://github.com/didinj/angular6-httpclient-example/blob/master/src/app/rest.service.ts
    //https://www.youtube.com/watch?v=RTzi5DS7On4
  //https://www.techiediaries.com/angular-http-client/
  //https://www.youtube.com/watch?v=uzzXa-dq2SI
}

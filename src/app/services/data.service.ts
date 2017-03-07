import { DatabaseService } from './database.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  private _baseUrl = location.href.indexOf('localhost') >= 0 ? '/api/' : '/api/';

  constructor(private http: Http, private database: DatabaseService) { }

  get(path) {
    return this.http.get(this._baseUrl + path)
      .map(res => res.json());
  }

  getCurConditions(path) {

    //check and see if the conditions are in the DB and were created within last 5 min
    //if they are: fetch from the database
    //if not: get from gov api and store in the DB

    return this.http.get(this._baseUrl + path)
      .map(res => res.json())
      .do(res => this.persistConditions(res).subscribe(value => console.log("data saved")))
  }


  checkDbForCurConditions() : Observable<any>{
    return Observable.create(observer => {
      //check db for conditions
      observer.next();
    })
  }

  persistConditions(conditions: any): Observable<any>{
     return Observable.create(observer => {
       //save to db here
      observer.next();
    })
  }

  fetchConditions(provinceCode: string, cityCode: string){

  }

}

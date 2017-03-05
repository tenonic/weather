import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  private _baseUrl = location.href.indexOf('localhost') >= 0 ? '/api/' : '/api/';

  constructor(private http: Http) {}

  get(path) {
    console.log(path);
    return this.http.get(this._baseUrl + path)
      .map(res => res.json());
  }

}

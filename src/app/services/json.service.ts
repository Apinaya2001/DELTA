import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private jsonUrl = './assets/json/career.json';

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

}

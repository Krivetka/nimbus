import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {MoreFilmInfo, SearchResponse} from "../interfaces/searcResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = 'https://www.omdbapi.com' ;
  private apiKey = '88cddfce';

  constructor(private http: HttpClient) { }

  getFilmsList(text:string):Observable<SearchResponse>{
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('s', text);
    return this.http.get<SearchResponse>(`${this.apiUrl}/?`, {params})
  }

  getFilm(id:string):Observable<MoreFilmInfo>{
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('i', id);
    return this.http.get<MoreFilmInfo>(`${this.apiUrl}/?`, {params})
  }
}

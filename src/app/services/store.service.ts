import { Injectable } from '@angular/core';
import {FilmInfo} from "../interfaces/searcResponse";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private dataSubject: BehaviorSubject<Array<FilmInfo>> = new BehaviorSubject<Array<FilmInfo>>([]);
  data$ = this.dataSubject.asObservable();

  constructor() { }

  addFilmList(films:Array<FilmInfo>):void{
    this.dataSubject.next([...films]);
  }

}

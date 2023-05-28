import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {APIService} from "../../services/api.service";
import {SearchResponse} from "../../interfaces/searcResponse";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {fromEvent,Subscription} from "rxjs";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit, OnDestroy{
  public value:string = '';
  public isFound: boolean = true;

  @ViewChild('searchInput') searchInput?: ElementRef;

  private stream = new Subscription();

  constructor(private apiService: APIService, public storeService:StoreService){}

  ngAfterViewInit():void {
    this.stream = fromEvent(this.searchInput?.nativeElement,'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(()=>{
        this.getFilmsList()
      });
  }

  ngOnDestroy():void{
    this.stream.unsubscribe();
  }

  getFilmsList():void{
    this.apiService.getFilmsList(this.value.trim()).subscribe((res:SearchResponse)=>{
      this.isFound = res.Response === "True";
      if(res.Search){
        this.storeService.addFilmList(res.Search)
      }
    })
  }

  clearField():void {
    this.value='';
    this.storeService.addFilmList([]);
    this.isFound=false;
  }
}

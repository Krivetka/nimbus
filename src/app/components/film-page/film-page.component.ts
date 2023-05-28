import {Component, OnInit} from '@angular/core';
import {APIService} from "../../services/api.service";
import {ActivatedRoute, Params} from "@angular/router";
import {first} from "rxjs/operators";
import {MoreFilmInfo} from "../../interfaces/searcResponse";

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit{
  public filmData?:MoreFilmInfo;
  private noImgLink = "https://dostawka.com.pl/wp-content/uploads/2017/08/no-image.png";
  constructor(
    private route: ActivatedRoute,
    private apiService: APIService
  ){}
 ngOnInit():void{
   this.route.params.pipe(first()).subscribe((params: Params) => {
     this.apiService.getFilm(params.id).pipe(first())
       .subscribe((res:MoreFilmInfo) => {
         this.filmData = res;
         if(res.Poster==="N/A"){
           this.filmData={...res, Poster:this.noImgLink}
         }
       });
   });
 }
}

import {Component, Input, OnInit} from '@angular/core';
import {FilmInfo} from "../../interfaces/searcResponse";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() card?: FilmInfo;

  private noImgLink = "https://dostawka.com.pl/wp-content/uploads/2017/08/no-image.png";

  ngOnInit(): void {
    if(this.card?.Poster==='N/A'){
      this.card = {...this.card,Poster:this.noImgLink}
    }
  }

}

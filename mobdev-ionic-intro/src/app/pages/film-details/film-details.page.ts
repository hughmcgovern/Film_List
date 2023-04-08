import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
[x: string]: any;

  film:any;
  crawl: any;
  filmId:any;

  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) { 
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://swapi.dev/api/films/${id}').subscribe(res => {
      this.film = res;
      this.crawl = res;
      console.log("res",this.film);
      console.log("id",id);
      //this.crawl = res.results[2].opening_crawl;
      
    })
  }

}

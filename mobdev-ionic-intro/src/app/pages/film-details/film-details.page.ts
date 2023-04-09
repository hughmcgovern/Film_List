import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


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
  split2:any;
  data2:any;
  filmsdata: Observable<any>;
  counter:any;
  id:any;
  crawlany:any;
  title:any;

  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) { 
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.split2="hello from the constructor times three";
    this.counter=0;
  }

  ngOnInit() {
    this.filmsdata = this.http.get('https://swapi.dev/api/films');
    this.filmsdata.subscribe(data2 =>{ console.log('my data: ', data2)
    console.log("OnInit");
    this.crawl = data2.results[2].opening_crawl;
    console.log("*** director 1234 ***:",this.crawl);
    console.log("****director 3456****",data2.results[0].director);
    console.log("filmID4",this.filmId);});
   
      
      

  }
  loadcrawl(){
    this.filmsdata = this.http.get('https://swapi.dev/api/films');
    this.filmsdata.subscribe(data2 =>{ console.log('my data: ', data2)
    this.counter = this.counter +1;
    if (this.counter >=5){this.counter=0}
    this.title = data2.results[this.counter].title; 
    this.crawlany = data2.results[this.counter].opening_crawl;  
  });
  }

  
}

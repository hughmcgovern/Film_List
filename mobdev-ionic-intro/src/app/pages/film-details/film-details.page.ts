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
  filmId4:any;

  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) { 
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.split2="hello from the constructor";
    this.filmId=this.filmId+0;
  }

  ngOnInit() {
   /* let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://swapi.dev/api/films/${id}').subscribe(res => {
      this.film = res;
      this.crawl = res;
      console.log("res",this.film);
      console.log("id",id);
      //this.crawl = res.results[2].opening_crawl;
      this.split2="hello";
      this.filmId; */

    /* let id = this.activatedRoute.snapshot.paramMap.get('id');
     this.http.get('https://swapi.dev/api/films/${id}').subscribe(res => {
       this.film = res;
       this.crawl = res;
       console.log("res",this.film);
       console.log("id",id);
       //this.crawl = res.results[2].opening_crawl;
       this.split2="hello";
       this.filmId; */
    //this.filmId4 = this['router'].navigateByUrl('/tabs/films/${filmId}');

    this.filmsdata = this.http.get('https://swapi.dev/api/films');
    this.filmsdata.subscribe(data2 =>{ console.log('my data: ', data2)
    console.log("OnInit");
    this.crawl = data2.results[0].opening_crawl;
    console.log("*** director ***:",this.crawl);
    console.log("****director****",data2.results[0].director);});
    console.log("filmID4",this.filmId4);

     
      
      

  }
}  


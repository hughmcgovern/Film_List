import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;
  crawl:any;
  split2: any;

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
    this.films.subscribe(data =>{ console.log('my data: ', data)
    console.log("OnInit");
    this.crawl = data.results[2].director;
    console.log("*** director ***:",this.crawl);
    console.log("****director****",data.results[2].director);
    
    
    ;});
        

	}

  openDetails(film: { url: string; }){
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl('/tabs/films/${filmId}');
    console.log("OpenDetails");
    console.log("filmIdmega",filmId);
    console.log("split",split); 
    this.films = this.http.get('https://swapi.dev/api/films');
    this.films.subscribe(data =>{ console.log('my data: ', data)
    this.crawl = data.results[filmId].director;
    this.split2 = split;
    console.log("record 2 crawl:",this.crawl);
    console.log("record 2 crawl again",data.results[filmId].director);
  });
  }
  loaddata(){
    this.films = this.http.get('https://swapi.dev/api/films');
    this.films.subscribe(data =>{ console.log('my data: ', data)
    this.crawl = data.results[0].title;
    console.log("titlel:",this.crawl);
    console.log("titleagain",data.results[0].title);
  });
}
  
}

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

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
    this.films.subscribe(data =>{ console.log('my data: ', data)
    this.crawl = data.results[2].opening_crawl;
    console.log("*** not working crawl ***:",this.crawl);
    console.log("****working crawl****",data.results[2].opening_crawl);
    
    
    ;});
        

	}

  openDetails(film: { url: string; }){
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl('/tabs/films/${filmId}');
    
  }
  
}

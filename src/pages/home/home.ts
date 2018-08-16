import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public popularMovies;

  constructor(private http: HttpClient, public navCtrl: NavController) {
    // From: https://api.themoviedb.org/3/movie/popular?api_key=f843c14de4ce13c7041022ee34c428ec&language=en-US
    this.popularMovies = this.http.get("https://api.myjson.com/bins/idzw4");
  }
}

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
    this.popularMovies = this.http.get("https://api.myjson.com/bins/wdwjh");
  }
}

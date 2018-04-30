import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	books: any = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {
  	this.getBooks();
  }

  getBooks() {
    this.http.get('acf.json').subscribe(
      (books) => { this.books = books }
    )
  }
}

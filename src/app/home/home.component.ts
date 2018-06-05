import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [{title: 'Title of Card One', text: 'First One'},
           {title: 'Title Of Card Two', text: 'Second One'},
           {title: 'Title Of Card Three', text: 'Third One'}];

  constructor() { }

  ngOnInit() {
  }

}

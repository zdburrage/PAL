import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('cardText') cardText: string;
  @Input('cardTitle') cardTitle: string;



  constructor() { }

  ngOnInit() {
  }

}

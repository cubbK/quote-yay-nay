import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit {
  @Input() isQuoteOfTheDay: boolean;
  constructor() { }

  ngOnInit() {
  }

}

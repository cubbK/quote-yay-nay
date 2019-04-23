import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit {
  @Input() isQuoteOfTheDay: boolean;
  voted = false;
  voteOutcome: boolean;
  constructor() { }

  vote(condition: boolean) {
    this.voted = true;
    this.voteOutcome = condition;
  }

  ngOnInit() {
  }

}

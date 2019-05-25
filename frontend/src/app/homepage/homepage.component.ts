import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CurrentQuoteStore } from '../stores/currentQuote.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(public currentQuote: CurrentQuoteStore) {
  }
  ngOnInit() {
  }

}

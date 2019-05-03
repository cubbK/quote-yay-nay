import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-acknowledgement',
  templateUrl: './vote-acknowledgement.component.html',
  styleUrls: ['./vote-acknowledgement.component.scss']
})
export class VoteAcknowledgementComponent implements OnInit {
  voteStatus = false;
  constructor() { }

  ngOnInit() {
  }

}

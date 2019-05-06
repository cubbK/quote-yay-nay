import { Component, OnInit, Input } from '@angular/core';

enum Colors {
  approval = 'approval',
  disapproval = 'disapproval'
}

@Component({
  selector: 'app-card-generic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: Colors;
  @Input() numberOfVoters: number = null;
  @Input() voted = false;

  showUpperNumber: boolean;
  showBottomNumber: boolean;
  constructor() { }

  ngOnInit() {
    this.showUpperNumber = this.color === Colors.approval;
    this.showBottomNumber = this.color === Colors.disapproval;
  }

}

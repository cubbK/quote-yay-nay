import { Component, OnInit, Input } from '@angular/core';
import { MatButton } from '@angular/material';

enum Colors {
  approval = 'approval',
  disapproval = 'disapproval'
}

@Component({
  selector: 'app-card-generic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends MatButton {
  // @Input() color: Colors;
  @Input() numberOfVoters: number = null;
  @Input() voted: boolean;
  @Input() isActive: boolean;
  @Input() votersPosition: string;

  // showUpperNumber = this.color === Colors.approval;
  // showBottomNumber = this.color === Colors.disapproval;
}

import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentQuoteStore {
  @observable voteState: boolean = null;

  @computed get voted(): boolean {
    return this.voteState !== null;
  }

  @action setVoteState(value: boolean) {
    this.voteState = value;
  }


}

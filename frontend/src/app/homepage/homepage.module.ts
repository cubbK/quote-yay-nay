import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { MaterialModule } from '../material.module';
import { MatCardModule } from '@angular/material';
import { LoginCardComponent } from './login-card/login-card.component';
import { VoteAcknowledgementComponent } from './vote-acknowledgement/vote-acknowledgement.component';
import { CardGenericModule } from '../components/card-generic/card-generic.module';

@NgModule({
  declarations: [HomepageComponent, QuoteCardComponent, LoginCardComponent, VoteAcknowledgementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CardGenericModule
  ]
})
export class HomepageModule { }

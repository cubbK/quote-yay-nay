import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { MaterialModule } from '../material.module';
import { MatCardModule } from '@angular/material';
import { LoginCardComponent } from './login-card/login-card.component';

@NgModule({
  declarations: [HomepageComponent, QuoteCardComponent, LoginCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class HomepageModule { }

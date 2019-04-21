import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { MaterialModule } from '../material.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [HomepageComponent, QuoteCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class HomepageModule { }

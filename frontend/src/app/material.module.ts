import { MatButtonModule, MatCheckboxModule, MatCard, MatCardHeader, MatCardModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatToolbarModule],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule],
})
export class MaterialModule { }

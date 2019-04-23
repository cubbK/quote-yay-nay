import { MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule { }

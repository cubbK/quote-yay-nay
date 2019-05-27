import { MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatDividerModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule],
})
export class MaterialModule { }

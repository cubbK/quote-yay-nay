import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardGenericComponent } from './card-generic.component';
import { TitleComponent } from './title/title.component';
import { IconComponent } from './icon/icon.component';
import { MatIconModule } from '@angular/material';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ContentComponent, CardGenericComponent, TitleComponent, IconComponent, ButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MaterialModule
  ],
  exports: [ContentComponent, CardGenericComponent, TitleComponent, IconComponent, ButtonComponent]
})
export class CardGenericModule { }

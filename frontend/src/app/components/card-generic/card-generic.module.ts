import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardGenericComponent } from './card-generic.component';
import { TitleComponent } from './title/title.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [ContentComponent, CardGenericComponent, TitleComponent, IconComponent],
  imports: [
    CommonModule,
  ],
  exports: [ContentComponent, CardGenericComponent, TitleComponent, IconComponent]
})
export class CardGenericModule { }

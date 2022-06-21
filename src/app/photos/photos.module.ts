import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FormsModule } from '@angular/forms';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from '../shared/components/card/card.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { DarkenOnHoverDirective } from '../shared/directives/darken-on-hover/darken-on-hover.directive';

@NgModule({
  imports: [
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
      HttpClientModule,
      CommonModule,
  ]
})
export class PhotosModule { }

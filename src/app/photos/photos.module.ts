import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { HttpClientModule } from '@angular/common/http';

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

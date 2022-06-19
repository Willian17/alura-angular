import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoComponent,
    PhotoListComponent
  ],
  exports: [
    PhotoListComponent
  ]
})
export class PhotosModule { }

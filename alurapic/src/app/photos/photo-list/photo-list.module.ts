import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CommonModule } from '@angular/common';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { DarkenOnHoverDirective } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.directive';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe,
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule,
        RouterModule
    ]
})
export class PhotoListModule { }
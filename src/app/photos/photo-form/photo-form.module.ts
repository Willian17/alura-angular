import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ImmediateClickDirectiveModule } from 'src/app/shared/directives/immediate-click-directive/immediate-click-directive.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        PhotoModule,
        ImmediateClickDirectiveModule
    ]
})
export class PhotoFormModule { }
import { Pipe, PipeTransform } from '@angular/core';
import { IPhoto } from '../photo/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: IPhoto[], descriptionQuery: string): IPhoto[] {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    return descriptionQuery ?
      photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery)) :
      photos

  }

}

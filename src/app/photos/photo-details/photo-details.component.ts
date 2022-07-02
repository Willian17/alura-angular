import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhotoComment } from 'src/app/shared/interfaces/IPhotoComment';
import { IPhoto } from '../../shared/interfaces/IPhoto';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<IPhoto>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.photoId = +this.route.snapshot.params.id;
    this.photo$ = this.photoService.findById(this.photoId);
  }

}

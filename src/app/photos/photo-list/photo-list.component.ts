import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IPhoto } from '../photo/photo';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: IPhoto[] = [];
  filter: string = '';

  userName: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {

  }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.username;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }


  load() {
    this.photoService
      .listFromUser(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      })
  }

}

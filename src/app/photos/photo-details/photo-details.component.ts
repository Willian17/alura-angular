import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
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
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(({ id }) => {
      this.photoId = id;
      this.photo$ = this.photoService.findById(this.photoId);
    })
  }

  handleRemove() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(
        () => {
          this.router.navigate(['']);
          this.alertService.success("Photo removed");
        },
        err => {
          console.log(err);
          this.alertService.warning('Could not delete the photo!');
        });
  }

}

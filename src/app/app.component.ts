import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPhoto } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
  ) {

  }

  ngOnInit() {
    
  }

}

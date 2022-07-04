import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDectorService } from 'src/app/core/platform-dector/platform-dector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  fromUrl: string;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDectorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => this.fromUrl = params['fromUrl']);
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.platformDetector.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
  }

  login() {

    const { username, password } = this.loginForm.value;

    this.authService
      .authenticate(username, password)
      .subscribe(
        () => this.fromUrl
        ? this.router.navigateByUrl(this.fromUrl)
        : this.router.navigate(['user', username]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.platformDetector.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
          alert(err.error.message);
        }
      );
  }

}

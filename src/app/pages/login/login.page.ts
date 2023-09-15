import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../providers/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

interface LoginResponse {
  jwt: string
}

@Component({
  selector: 'tc-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  route = inject(Router);

  ngOnInit() {
    if (this.authService.checkIsLoggedIn()) this.route.navigate(['/colleagues']).then();
  }

  formGroup: FormGroup = this.formBuilder.group(
    {
      pseudo: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }
  );

  getCurrentUser() {

  }

  login() {
    console.log(this.formGroup.value);
    const pseudo = this.formGroup.value.pseudo;
    const password = this.formGroup.value.password;
    this.authService.login(pseudo, password).subscribe({
      next: response => {
        const loginResponse = response as LoginResponse;
        localStorage.setItem('token', loginResponse.jwt);
        this.route.navigate(['/colleagues']).then();
        console.log('moving');
      },
      error: () => {
        this.formGroup.patchValue({password: ''});
      }
    });
  }
}

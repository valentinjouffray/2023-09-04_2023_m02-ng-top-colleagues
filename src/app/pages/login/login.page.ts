import {Component, inject} from '@angular/core';
import {AuthService} from "../../providers/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError} from "rxjs";
import {Router} from "@angular/router";

interface LoginResponse {
  jwt: string
}

@Component({
  selector: 'tc-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  route = inject(Router);

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
        this.route.navigate(['colleagues']).then();
      },
      error: () => {
        this.formGroup.patchValue({password: ''});
      }
    });
  }
}

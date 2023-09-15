import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../providers/auth.service";

@Component({
  selector: 'tc-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent {
  aRoute = inject(ActivatedRoute);
  authService = inject(AuthService);

  get isLoggedIn(): boolean {
    return this.authService.checkIsLoggedIn();
  }

}

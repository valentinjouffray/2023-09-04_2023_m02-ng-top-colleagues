import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tc-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent {
  aRoute = inject(ActivatedRoute);

}
